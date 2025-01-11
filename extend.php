<?php

/*
 * This file is part of justoverclock/stats.
 *
 * Copyright (c) 2025 Marco Colia.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Justoverclock\Stats;

use Flarum\Extend;
use Flarum\User\User;
use Justoverclock\Stats\Controller\BaseStats\CreateBaseStatController;
use Justoverclock\Stats\Controller\BaseStats\DeleteBaseStatController;
use Justoverclock\Stats\Controller\BaseStats\GetBaseStatsController;
use Justoverclock\Stats\Controller\UserStats\ShowUserStatsController;
use Justoverclock\Stats\Controller\UserStats\UpdateUserStatController;
use Justoverclock\Stats\Model\UserStat;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/less/admin.less'),
    new Extend\Locales(__DIR__.'/locale'),

    (new Extend\Routes('api'))
        ->get('/base-stats', 'base-stat.get', GetBaseStatsController::class)
        ->post('/base-stats/create', 'base-stat.create', CreateBaseStatController::class)
        ->delete('/base-stats/delete/{statId}', 'base-stat.delete', DeleteBaseStatController::class)
        ->patch('/user-stats/{id}', 'user-stats.update', UpdateUserStatController::class)
        ->get('/user-stats/{userId}', 'user-stats.show', ShowUserStatsController::class),

    (new Extend\Settings())
        ->serializeToForum('justoverclock-stats.baseStats', 'justoverclock-stats.baseStats'),
];
