import Component, {ComponentAttrs} from "flarum/common/Component";
import Mithril from "mithril";
import {BaseStat, BaseStatsResponse} from "../../admin/components/types";
import app from 'flarum/forum/app'

export default class UserStats extends Component {
  public actualStats: BaseStat[] = [];
  oninit(vnode: Mithril.Vnode<ComponentAttrs, this>) {
    super.oninit(vnode);
    this.actualStats = [];
    this.getUserStat();

  }

  view(vnode: Mithril.Vnode<ComponentAttrs, this>): Mithril.Children {
    return (
      <div className='user-stats-fe'>
       {/* {this.actualStats && this.actualStats.map(stat => (
          <div className='stat'>
            <img title={stat.attributes.name} src={stat.attributes.img} alt={stat.attributes.name}/>
          </div>
        ))}*/}
      </div>
    );
  }
  //TODO: refactor change with USERSTATS, not global

  getUserStat() {
    app.request({
      method: 'GET',
      url: `${app.forum.attribute('apiUrl')}/user-stats/1`,
    }).then(res => {
      console.log(res)
    })
  }
}
