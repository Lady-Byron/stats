// @ts-nocheck
import Component, { ComponentAttrs } from 'flarum/common/Component';
import Mithril from 'mithril';
import app from 'flarum/forum/app';
import User from 'flarum/common/models/User';
import { ApiResponse, BaseStat, UserStat } from './types';
import EditModal from './EditModal/EditModal';
import SingleUserStat from './SingleUserStat';

interface UserStatsAttrs { user: User; }

export default class UserStats extends Component<UserStatsAttrs> {
  public userStat: ApiResponse | null = null;

  oninit(vnode: Mithril.Vnode<ComponentAttrs, this>) {
    super.oninit(vnode);
    this.userStat = null;
    this.getUserStat();
  }

  view(): Mithril.Children {
    if (!this.userStat) return <div></div>;

    const { data } = this.attrs.user;
    const a = (data && data.attributes) || {};
    const has = (k: string) => Object.prototype.hasOwnProperty.call(a, k);

    const moneyName     = app.translator.trans('justoverclock-stats.forum.moneyName') || 'Money';
    const topicsName    = 'Topics';
    const repliesName   = 'Replies';
    const followingName = 'Following';
    const followersName = 'Followers';

    const canEditStats: boolean = !!a.canEditStats;

    return (
      <div className="show-stats-wrapper">
        <div className="user-stats-fe show-stats-container">
          {has('money') && (
            <SingleUserStat name={moneyName} icon="fa-duotone fa-solid fa-coin-front" value={a.money ?? 0} />
          )}
          {has('discussionCount') && (
            <SingleUserStat name={topicsName} icon="fa-duotone fa-solid fa-message-smile" value={a.discussionCount ?? 0} />
          )}
          {has('commentCount') && (
            <SingleUserStat name={repliesName} icon="fa-duotone fa-solid fa-message-heart" value={a.commentCount ?? 0} />
          )}
          {has('followingCount') && (
            <SingleUserStat name={followingName} icon="fa-duotone fa-solid fa-person-dress-fairy" value={a.followingCount ?? 0} />
          )}
          {has('followerCount') && (
            <SingleUserStat name={followersName} icon="fa-duotone fa-solid fa-head-side-heart" value={a.followerCount ?? 0} />
          )}

          {/* 自定义 BaseStats 仍按原实现，用图片或你后续要改的 FA 都行 */}
          {this.userStat.data && this.userStat.data.map((stat: UserStat) => {
            const baseStat: BaseStat | null | undefined =
              this.userStat && this.userStat.included.find(
                (b) => b.id.toString() === stat.attributes.baseStatId.toString()
              );
            const name = baseStat?.attributes.name || '';
            const value = stat.attributes.value;

            return (
              <SingleUserStat
                name={name}
                // 如果你想让“自定义统计”也用 FA，可以在 BaseStat 里存 icon 类名；现阶段先不改后端，这里给个默认图标：
                icon="fa-duotone fa-chart-simple"
                value={value}
                onclick={() => { canEditStats ? this.openEditModal(stat, baseStat, this.attrs.user) : null; }}
              />
            );
          })}
        </div>
      </div>
    );
  }

  openEditModal(stat: UserStat, baseStat: any, user: User) {
    app.modal.show(EditModal, { stat, baseStat, user, editUserStat: this.editUserStat.bind(this) });
  }

  editUserStat(id: string | number, newValue: string | number) {
    app.request({
      method: 'PATCH',
      url: `${app.forum.attribute('apiUrl')}/user-stats/${id}`,
      body: { data: { attributes: { value: Number(newValue) } } }
    }).then(() => {
      app.alerts.show({ type: 'success' }, app.translator.trans('justoverclock-stats.forum.successStatEdited'));
    });
  }

  getUserStat() {
    app.request({
      method: 'GET',
      url: `${app.forum.attribute('apiUrl')}/user-stats/${this.attrs.user.data.id}`,
    }).then((res) => { this.userStat = res as ApiResponse; m.redraw(); });
  }
}

