// @ts-nocheck
import Component, { ComponentAttrs } from 'flarum/common/Component';
import Mithril from 'mithril';
import app from 'flarum/forum/app';
import User from 'flarum/common/models/User';
import { ApiResponse, BaseStat, UserStat } from './types';
import EditModal from './EditModal/EditModal';
import SingleUserStat from './SingleUserStat';

interface UserStatsAttrs { user: User; }

/** 扩展内置资源路径 */
const extAsset = (file: string) =>
  `${app.forum.attribute('baseUrl')}/assets/extensions/justoverclock-stats/${file}`;

export default class UserStats extends Component<UserStatsAttrs> {
  public userStat: ApiResponse | null = null;

  oninit(vnode: Mithril.Vnode<ComponentAttrs, this>) {
    super.oninit(vnode);
    this.userStat = null;
    this.getUserStat();
  }

  view(vnode: Mithril.Vnode<ComponentAttrs, this>): Mithril.Children {
    if (!this.userStat) return <div></div>;

    const { data } = this.attrs.user;
    const a = (data && data.attributes) || {};
    const has = (k: string) => Object.prototype.hasOwnProperty.call(a, k);

    // 文案（可换成翻译）
    const moneyName     = app.translator.trans('justoverclock-stats.forum.moneyName') || 'Money';
    const topicsName    = 'Topics';
    const repliesName   = 'Replies';
    const followingName = 'Following';
    const followersName = 'Followers';

    // 图标：money 继续支持后台覆盖；其他用扩展自带图片
    const moneyImg     = app.forum.attribute('justoverclock-stats.moneyImg') || extAsset('money1.png');
    const topicsImg    = extAsset('topics.svg');
    const repliesImg   = extAsset('replies.svg');
    const followingImg = extAsset('following.svg');
    const followersImg = extAsset('followers.svg');

    const canEditStats: boolean = !!a.canEditStats;

    // 只读内建统计：存在即显示（不进后端）
    const builtin: Array<{ name: string; value: number | string; img: string; alt: string }> = [];
    if (has('money'))           builtin.push({ name: moneyName,     value: a.money ?? 0,              img: moneyImg,     alt: moneyName });
    if (has('discussionCount')) builtin.push({ name: topicsName,    value: a.discussionCount ?? 0,    img: topicsImg,    alt: topicsName });
    if (has('commentCount'))    builtin.push({ name: repliesName,   value: a.commentCount ?? 0,       img: repliesImg,   alt: repliesName });
    if (has('followingCount'))  builtin.push({ name: followingName, value: a.followingCount ?? 0,     img: followingImg, alt: followingName });
    if (has('followerCount'))   builtin.push({ name: followersName, value: a.followerCount ?? 0,      img: followersImg, alt: followersName });
    // ✅ 不再收纳/展示 EXP

    return (
      <div className="show-stats-wrapper">
        <div className="user-stats-fe show-stats-container">
          {builtin.map((it) => (
            <SingleUserStat name={it.name} img={it.img} alt={it.alt} value={it.value} />
          ))}

          {/* 可编辑的自定义 BaseStats（原实现保留） */}
          {this.userStat.data &&
            this.userStat.data.map((stat: UserStat) => {
              const baseStat: BaseStat | null | undefined =
                this.userStat &&
                this.userStat.included.find(
                  (baseStat) => baseStat.id.toString() === stat.attributes.baseStatId.toString()
                );
              const imgPath = baseStat ? baseStat.attributes.img : '';

              return (
                <SingleUserStat
                  name={baseStat?.attributes.name}
                  img={imgPath}
                  alt={baseStat?.attributes.name}
                  value={stat.attributes.value}
                  onclick={() => {
                    canEditStats ? this.openEditModal(stat, baseStat, this.attrs.user) : null;
                  }}
                />
              );
            })}
        </div>
      </div>
    );
  }

  openEditModal(stat: UserStat, baseStat: any, user: User) {
    app.modal.show(EditModal, {
      stat,
      baseStat,
      user,
      editUserStat: this.editUserStat.bind(this),
    });
  }

  editUserStat(id: string | number, newValue: string | number) {
    app.request({
      method: 'PATCH',
      url: `${app.forum.attribute('apiUrl')}/user-stats/${id}`,
      body: { data: { attributes: { value: Number(newValue) } } },
    }).then(() => {
      app.alerts.show({ type: 'success' }, app.translator.trans('justoverclock-stats.forum.successStatEdited'));
    });
  }

  getUserStat() {
    app.request({
      method: 'GET',
      url: `${app.forum.attribute('apiUrl')}/user-stats/${this.attrs.user.data.id}`,
    }).then((res) => {
      this.userStat = res as ApiResponse;
      m.redraw();
    });
  }
}

