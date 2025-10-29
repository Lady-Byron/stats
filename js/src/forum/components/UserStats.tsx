// @ts-nocheck
import Component, { ComponentAttrs } from 'flarum/common/Component';
import Mithril from 'mithril';
import app from 'flarum/forum/app';
import User from 'flarum/common/models/User';
import { ApiResponse, BaseStat, UserStat } from './types';
import EditModal from './EditModal/EditModal';
import SingleUserStat from './SingleUserStat';

interface UserStatsAttrs {
  user: User;
}

const svg = (s: string) => `data:image/svg+xml;utf8,${encodeURIComponent(s)}`;

// 统一视觉：与按钮同色系 #4D698E
const IMG_MONEY = (baseUrl: string) =>
  app.forum.attribute('justoverclock-stats.moneyImg') ||
  `${baseUrl}/assets/extensions/justoverclock-stats/money1.png`;

const IMG_TOPICS = svg(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
     <rect x="3" y="4" width="18" height="14" rx="2" ry="2" fill="#4D698E"/>
     <path fill="#fff" d="M6 8h12v2H6zM6 12h9v2H6z"/>
   </svg>`
);

const IMG_REPLIES = svg(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
     <path fill="#4D698E" d="M4 3h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H10l-5 4v-4H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/>
     <path fill="#fff" d="M7 8h10v2H7zM7 11h7v2H7z"/>
   </svg>`
);

const IMG_FOLLOWING = svg(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
     <circle cx="9" cy="8" r="3.5" fill="#4D698E"/>
     <path fill="#4D698E" d="M3 19a6 6 0 0 1 12 0v1H3z"/>
     <path fill="#4D698E" d="M16 7h4l-1.5-1.5L20 4l3 3-3 3-1.5-1.5L20 7h-4z"/>
   </svg>`
);

const IMG_FOLLOWERS = svg(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
     <circle cx="8" cy="8" r="3.2" fill="#4D698E"/>
     <circle cx="16" cy="9" r="2.6" fill="#4D698E"/>
     <path fill="#4D698E" d="M2.5 19a5.5 5.5 0 0 1 11 0v1h-11zM12.8 19c.2-1.9 1.6-3.6 3.9-4.3 2.3.7 3.7 2.4 3.9 4.3v1h-7.8z"/>
   </svg>`
);

const IMG_EXP = svg(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
     <rect x="4" y="14" width="3" height="6" fill="#4D698E"/>
     <rect x="9.5" y="11" width="3" height="9" fill="#4D698E"/>
     <rect x="15" y="7" width="3" height="13" fill="#4D698E"/>
     <path fill="#4D698E" d="M5 6l2-2 4 4 6-6 2 2-8 8z"/>
   </svg>`
);

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
    const baseUrl = app.forum.attribute('baseUrl');

    // labels（可后续换成翻译键）
    const moneyName = app.translator.trans('justoverclock-stats.forum.moneyName') || 'Money';
    const topicsName = 'Topics';
    const repliesName = 'Replies';
    const followingName = 'Following';
    const followersName = 'Followers';
    const expName = 'EXP';

    const canEditStats: boolean = !!a.canEditStats;

    // 只读内建统计：存在即显示
    const builtin: Array<{ name: string; value: number | string; img: string; alt: string }> = [];
    if (has('money'))           builtin.push({ name: moneyName,  value: a.money ?? 0,              img: IMG_MONEY(baseUrl),   alt: moneyName });
    if (has('discussionCount')) builtin.push({ name: topicsName, value: a.discussionCount ?? 0,    img: IMG_TOPICS,           alt: topicsName });
    if (has('commentCount'))    builtin.push({ name: repliesName, value: a.commentCount ?? 0,      img: IMG_REPLIES,          alt: repliesName });
    if (has('followingCount'))  builtin.push({ name: followingName, value: a.followingCount ?? 0,  img: IMG_FOLLOWING,        alt: followingName });
    if (has('followerCount'))   builtin.push({ name: followersName, value: a.followerCount ?? 0,   img: IMG_FOLLOWERS,        alt: followersName });
    if (has('exp'))             builtin.push({ name: expName, value: a.exp ?? 0,                   img: IMG_EXP,              alt: expName });

    return (
      <div className="show-stats-wrapper">
        <div className="user-stats-fe show-stats-container">
          {/* 内建只读项 */}
          {builtin.map((it) => (
            <SingleUserStat name={it.name} img={it.img} alt={it.alt} value={it.value} />
          ))}

          {/* 可编辑的自定义 BaseStats（保持原实现） */}
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
    app
      .request({
        method: 'PATCH',
        url: `${app.forum.attribute('apiUrl')}/user-stats/${id}`,
        body: {
          data: {
            attributes: {
              value: Number(newValue),
            },
          },
        },
      })
      .then(() => {
        app.alerts.show({ type: 'success' }, app.translator.trans('justoverclock-stats.forum.successStatEdited'));
      });
  }

  getUserStat() {
    app
      .request({
        method: 'GET',
        url: `${app.forum.attribute('apiUrl')}/user-stats/${this.attrs.user.data.id}`,
      })
      .then((res) => {
        this.userStat = res as ApiResponse;
        m.redraw();
      });
  }
}
