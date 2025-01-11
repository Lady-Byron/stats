<?php

namespace Justoverclock\Stats\Model;

use Flarum\Database\AbstractModel;


class UserStat extends AbstractModel
{
    protected $table = 'user_stats';
    public $timestamps = true;
    protected $primaryKey = 'id';

    protected $fillable = ['user_id', 'base_stat_id', 'value', 'created_at', 'updated_at'];

}
