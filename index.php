<?php

/**
 * Plugin Name:        Syntax highlight
 * Plugin URI:         https://roots.io/
 * Description:        Custom element for syntax-highlighting
 * Version:            0.0.1
 * Author:             Roots
 * Author URI:         https://roots.io/
 */

namespace Roots\SyntaxHighlight;

add_action('after_setup_theme', function () {
    add_action('wp_enqueue_scripts', function () {
        wp_enqueue_script(
            "syntax-highlight/client",
            plugin_dir_url(dirname(__FILE__)) . 'syntax-highlight/dist/js/client.js',
            [],
            null,
            true,
        );

        wp_enqueue_style(
            "syntax-highlight/client",
            plugin_dir_url(dirname(__FILE__)) . 'syntax-highlight/dist/css/988.css',
            [],
            null,
            true,
        );
    }, 100);

    add_action('wp_enqueue_editor', function () {
        wp_enqueue_script(
            "syntax-highlight/edit",
            plugin_dir_url(dirname(__FILE__)) . 'syntax-highlight/dist/js/editor.js',
            [      "wp-data",
            "wp-hooks",
            "wp-compose",
            "react",
            "wp-block-editor",
            "wp-components",
            "wp-i18n"],
            null,
            true,
        );

        wp_enqueue_script(
            "syntax-highlight/client",
            plugin_dir_url(dirname(__FILE__)) . 'syntax-highlight/dist/js/client.js',
            [],
            null,
            true,
        );

        wp_enqueue_style(
            "syntax-highlight/editor",
            plugin_dir_url(dirname(__FILE__)) . 'syntax-highlight/dist/css/988.css',
            [],
            null,
            true,
        );
    }, 100);
});
