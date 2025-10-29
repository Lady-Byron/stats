// @ts-nocheck
import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import UserCard from 'flarum/forum/components/UserCard';
import UserStatsPopover from './components/UserStatsPopover';

app.initializers.add('justoverclock/stats', () => {
  extend(UserCard.prototype, 'view', function (vnode) {
    // === 原作者的写法：硬索引到头像容器 ===
    let avatarNode;
    try {
      avatarNode = vnode.children[0].children[0].children[1].children;
    } catch (e) {
      avatarNode = null;
    }

    // 仅当找到时才插入，避免报错
    if (avatarNode && Array.isArray(avatarNode)) {
      avatarNode.push(<UserStatsPopover user={this.attrs.user} />);
    } else {
      // 便于你在控制台定位结构变化
      // console.warn('[stats] avatarNode not found', vnode);
    }
  });
});
