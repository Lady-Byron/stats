import Component, { ComponentAttrs } from 'flarum/common/Component';
import Mithril from 'mithril';
import app from 'flarum/admin/app'

export default class MoneyAndStoriesImages extends Component {
  oninit(vnode: Mithril.Vnode<ComponentAttrs, this>) {
    super.oninit(vnode);
  }

  view(vnode: Mithril.Vnode<ComponentAttrs, this>): Mithril.Children {

    return (
      <div className="img-conf-container">
        <h3>Money and Stories images:</h3>
        <input
          name="money_img"
          placeholder={app.translator.trans('justoverclock-stats.admin.moneyImgInputName')}
          className="FormControl"
          type="text"
        />
      </div>
    );
  }
}
