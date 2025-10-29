import Component, { ComponentAttrs } from 'flarum/common/Component';
import Mithril from 'mithril';
import Tooltip from 'flarum/common/components/Tooltip';

export interface SingleUserStatAttrs {
  name: string;
  // 二选一：传 img 或 icon（Font Awesome 类名）
  img?: string;
  icon?: string; // e.g. 'fa-solid fa-comments'
  alt?: string;
  value: string | number;
  onclick?: () => void;
}

export default class SingleUserStat extends Component<SingleUserStatAttrs> {
  oninit(vnode: Mithril.Vnode<ComponentAttrs, this>) {
    super.oninit(vnode);
  }

  view(): Mithril.Children {
    const { name, img, icon, alt, value, onclick } = this.attrs;

    // 构造 Tooltip 的单一子节点：<img> 或 <i>
    const tipChild = img
      ? <img src={img} alt={alt || name} />
      : <i class={icon!} aria-label={name} role="img"></i>; // 确保有 aria-label

    return (
      <div className="stat" onclick={() => onclick && onclick()}>
        <div className="stat-value">
          <Tooltip text={name}>
            {tipChild}
          </Tooltip>
          <p className="stat-desc">{name}</p>
          <p className="statvalue">{String(value)}</p>
        </div>
      </div>
    );
  }
}
