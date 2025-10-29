// @ts-nocheck
import Component, {ComponentAttrs} from "flarum/common/Component";
import Mithril from "mithril";
import app from 'flarum/forum/app'
import StatsModal from "./StatsModal/StatsModal";

export default class UserStatsPopover extends Component {
  oninit(vnode: Mithril.Vnode<ComponentAttrs, this>) {
    super.oninit(vnode);
  }

  openModal() {
    app.modal.show(StatsModal, { user: this.attrs.user });
  }

  view(): Mithril.Children {
    return (
      <div className="stats-btn-popover" onclick={() => this.openModal()} aria-label="Open stats" role="button" tabindex="0"
           onkeydown={(e: KeyboardEvent) => { if (e.key === 'Enter' || e.key === ' ') this.openModal(); }}>
        {/* 使用 Font Awesome —— 可换任意图标类，如 fa-duotone fa-chart-simple 等 */}
        <i class="fa-duotone fa-solid fa-star-shooting" aria-hidden="true"></i>
      </div>
    );
  }
}
