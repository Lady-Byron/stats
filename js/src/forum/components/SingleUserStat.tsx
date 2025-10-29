import Component, { ComponentAttrs } from 'flarum/common/Component';
import Mithril from 'mithril';
import Tooltip from 'flarum/common/components/Tooltip';

export interface SingleUserStatAttrs {
  name: string;
  /** 使用 FA：传一个类名（例如 'fa-duotone fa-comments' 或 'fa-solid fa-coins'） */
  icon: string;
  value: string | number;
  onclick?: () => void;
}

export default class SingleUserStat extends Component<SingleUserStatAttrs> {
  oninit(vnode: Mithril.Vnode<ComponentAttrs, this>) {
    super.oninit(vnode);
  }

  view(): Mithril.Children {
    const { name, icon, value, onclick } = this.attrs;

    return (
      <div className="stat" onclick={() => onclick && onclick()}>
        <div className="stat-value">
          {/* Tooltip 必须有且仅有一个直接 DOM 节点，这里用 <i> */}
          <Tooltip text={name}>
            <i class={icon} aria-label={name} role="img"></i>
          </Tooltip>
          <p className="stat-desc">{name}</p>
          <p className="statvalue">{String(value)}</p>
        </div>
      </div>
    );
  }
}

