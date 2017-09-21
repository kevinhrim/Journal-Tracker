jQuery( document ).ready(function ($) {
	$(document).ready(function(){

		$(".ws-ls-photos-default, .ws-ls-photos-compact").unitegallery({
			slider_enable_zoom_panel:false,
			gallery_autoplay:false,
			slider_scale_mode: 'fit',
            gallery_height: ws_ls_gallery_config['height']
        });

		$(".ws-ls-photos-carousel").unitegallery({
			tile_width: 120,
			tile_height: 120,
            gallery_width: "100%",
			tile_enable_textpanel: true,
            tile_textpanel_title_text_align: "center",
            tile_textpanel_always_on: true,
            carousel_autoplay: false,
            theme_navigation_margin: 2,
            theme_space_between_arrows: 1,
            gallery_images_preload_type: 'visible',
            slider_textpanel_desc_font_size: '4px',
            slider_textpanel_title_font_size: '4px'
        });
	});
});