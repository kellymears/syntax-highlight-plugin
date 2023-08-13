<?php

/**
 * Plugin Name:        Syntax highlight light
 * Plugin URI:         https://kellymears.me
 * Description:        Custom element for syntax highlighting
 * Version:            0.0.1
 * Author:             Kelly Mears
 * Author URI:         https://kellymears.me
 */

 namespace SyntaxHighlightLight;

$url = fn ($endpoint) => join("/", [plugin_dir_url(__DIR__), 'syntax-highlight', 'dist', $endpoint]);
$path = fn ($endpoint) => join("/", [plugin_dir_path(__DIR__), 'syntax-highlight', 'dist', $endpoint]);
$read = fn ($endpoint) => file_get_contents($path($endpoint));

$entrypoints = json_decode($read('entrypoints.json'));

add_action('wp_enqueue_scripts', function () use ($entrypoints, $url) {
    wp_enqueue_script(
        "syntax-highlight/client/js",
        $url($entrypoints->client->js[0]),
        $entrypoints->client->dependencies,
        null,
        true,
    );
}, 100);

add_action('wp_enqueue_editor', function () use ($entrypoints, $read, $url) {
    wp_enqueue_script(
        "syntax-highlight/editor/js",
        $url($entrypoints->editor->js[0]),
        $entrypoints->editor->dependencies,
        null,
        true,
    );

    wp_enqueue_script(
        "syntax-highlight/client/js",
        $url($entrypoints->client->js[0]),
        $entrypoints->client->dependencies,
        null,
        true,
    );
}, 100);
