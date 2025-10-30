// @ts-nocheck
import Component from 'flarum/common/Component';
import app from 'flarum/forum/app';
import StatsModal from './StatsModal/StatsModal';

export default class UserStatsPopover extends Component {
  openModal() {
    app.modal.show(StatsModal, { user: this.attrs.user });
  }

  view() {
    return (
      <div
        className="stats-btn-popover"
        role="button"
        aria-label="Open stats"
        tabindex="0"
        onclick={() => this.openModal()}
        onkeydown={(e) => ((e.key === 'Enter' || e.key === ' ') && this.openModal())}
      >
        {/* 用 Font Awesome（含 Pro Duotone 均可） */}
        {/* 换你喜欢的类名：fa-duotone fa-chart-simple / fa-solid fa-chart-line … */}
        <i class="fa-duotone fa-solid fa-star-shooting" aria-hidden="true"></i>
      </div>
    );
  }
}
