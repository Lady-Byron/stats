// @ts-nocheck
import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import UserCard from 'flarum/forum/components/UserCard';
import UserStatsPopover from './components/UserStatsPopover';

function findNodeByClass(vnode: any, classSubstr: string): any | null {
  if (!vnode) return null;
  const cls = vnode.attrs?.className || vnode.attrs?.class || '';
  if (typeof cls === 'string' && cls.includes(classSubstr)) return vnode;
  const kids = Array.isArray(vnode.children) ? vnode.children : [];
  for (const k of kids) {
    const hit = findNodeByClass(k, classSubstr);
    if (hit) return hit;
  }
  return null;
}

app.initializers.add('justoverclock/stats', () => {
  extend(UserCard.prototype, 'view', function (vnode) {
    // 找到头像容器（.UserCard-avatar），把按钮插进去
    const avatarWrap = findNodeByClass(vnode, 'UserCard-avatar');
    if (avatarWrap && Array.isArray(avatarWrap.children)) {
      avatarWrap.children.push(<UserStatsPopover user={this.attrs.user} />);
    }
  });
});
