import app from 'flarum/forum/app';
import UserCard from 'flarum/forum/components/UserCard';
import { extend } from 'flarum/common/extend';
import UserStats from "./components/UserStats";

app.initializers.add('justoverclock/stats', () => {
  extend(UserCard.prototype, 'infoItems', function (items){
    items.add('userStats', <UserStats />, -100);
  })
});
