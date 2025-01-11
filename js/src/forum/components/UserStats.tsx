// @ts-nocheck
import Component, {ComponentAttrs} from "flarum/common/Component";
import Mithril from "mithril";
import app from 'flarum/forum/app'
import LoadingIndicator from 'flarum/common/components/LoadingIndicator'
import User from "flarum/common/models/User";
import {ApiResponse, UserStat} from "./types";
import EditModal from "./EditModal/EditModal";

interface UserStatsAttrs {
  user: User
}

export default class UserStats extends Component<UserStatsAttrs> {
  public userStat: ApiResponse | null = null;

  oninit(vnode: Mithril.Vnode<ComponentAttrs, this>) {
    super.oninit(vnode);
    this.userStat = null;
    this.getUserStat();

  }

  view(vnode: Mithril.Vnode<ComponentAttrs, this>): Mithril.Children {
    if (!this.userStat) {
      return <LoadingIndicator />;
    }

    const canEditStats: boolean = this.attrs.user.data.attributes?.canEditStats

    return (
      <div className='user-stats-fe'>
        {this.userStat.data && this.userStat.data.map((stat: UserStat) => {
          const baseStat = this.userStat && this.userStat.included.find(
            (baseStat) => baseStat.id.toString() === stat.attributes.baseStatId.toString()
          );
          const imgPath = baseStat ? baseStat.attributes.img : "";

          return (
            <div
              className='stat'
              key={stat.id}
              onclick={() => {
                canEditStats
                  ? this.openEditModal(stat, baseStat, this.attrs.user)
                  : null
              }}
            >
              <div className='stat-value'>
                <img src={imgPath} alt=''/>
                <p class='statvalue'>
                  {stat.attributes.value}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  openEditModal(stat: UserStat, baseStat: any, user: User) {
    app.modal.show(EditModal, {
      stat,
      baseStat,
      user,
      editUserStat: this.editUserStat.bind(this)
    })
  }

  editUserStat(id: string | number, newValue: string | number) {
    app.request({
      method: 'PATCH',
      url: `${app.forum.attribute('apiUrl')}/user-stats/${id}`,
      body: {
        data: {
          attributes: {
            value: Number(newValue)
          }
        }
      }
    }).then(() => {
      app.alerts.show({ type: 'success' }, app.translator.trans('justoverclock-stats.forum.successStatEdited'))
    })
  }

  getUserStat() {
    app.request({
      method: 'GET',
      url: `${app.forum.attribute('apiUrl')}/user-stats/${this.attrs.user.data.id}`,
    }).then(res => {
      this.userStat = res as ApiResponse;
      m.redraw()
    })
  }
}
