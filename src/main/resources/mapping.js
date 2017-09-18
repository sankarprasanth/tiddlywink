{
  "mappings": {
    "*": {
      "dynamic_templates": [
        {
          "strings": {
            "match_mapping_type": "string",
            "mapping": {
              "type": "string",
              "fields": {
                "raw": {
                  "type":  "keyword",	
                  "index": "not_analyzed"
                }
              }
            }
          }
        }
      ]
    }
  }
}

http://161.202.25.52:9200/news-news_india/_mapping/*

{
    "*": 
{"properties":{"brand":{"type":"string","index":"not_analyzed"},"category":{"type":"string","index":"not_analyzed"},"image_url_large":{"type":"string","index":"not_analyzed"},"image_url_medium":{"type":"string","index":"not_analyzed"},"model":{"type":"string","index":"not_analyzed"},"productId":{"type":"string","index":"not_analyzed"},"product_id":{"type":"string","index":"not_analyzed"},"product_url":{"type":"string","index":"not_analyzed"},"providerId":{"type":"string","index":"not_analyzed"},"seoTitle":{"type":"string","index":"not_analyzed"},"shopAICategory":{"type":"string","index":"not_analyzed"},"shopAICategoryId":{"type":"string","index":"not_analyzed"},"url":{"type":"string","index":"not_analyzed"},"size":{"type":"string","index":"not_analyzed"},"style":{"type":"string","index":"not_analyzed"},"style_code":{"type":"string","index":"not_analyzed"},"3d":{"type":"string","index":"not_analyzed"},"3d_support":{"type":"string","index":"not_analyzed"},"3g":{"type":"string","index":"not_analyzed"},"3g_via_dongle":{"type":"string","index":"not_analyzed"},"4g":{"type":"string","index":"not_analyzed"},"accessories_included":{"type":"string","index":"not_analyzed"},"accuracy":{"type":"string","index":"not_analyzed"},"activation_type":{"type":"string","index":"not_analyzed"},"additional_features":{"type":"string","index":"not_analyzed"},"adhesive_included":{"type":"string","index":"not_analyzed"},"adjustable":{"type":"string","index":"not_analyzed"},"adjustable_height":{"type":"string","index":"not_analyzed"},"adjustable_lamps":{"type":"string","index":"not_analyzed"},"adjustable_racks":{"type":"string","index":"not_analyzed"},"adjustable_size":{"type":"string","index":"not_analyzed"},"adjustable_spray_interval_timer":{"type":"string","index":"not_analyzed"},"adjustable_straps":{"type":"string","index":"not_analyzed"},"adjustable_temperature":{"type":"string","index":"not_analyzed"},"adjustable_temperature_knob":{"type":"string","index":"not_analyzed"},"adjustable_thermostat":{"type":"string","index":"not_analyzed"},"advanced_features":{"type":"string","index":"not_analyzed"},"advanced_technologies":{"type":"string","index":"not_analyzed"},"age_group":{"type":"string","index":"not_analyzed"},"air_delivery":{"type":"string","index":"not_analyzed"},"air_flow_level":{"type":"string","index":"not_analyzed"},"air_popper":{"type":"string","index":"not_analyzed"},"air_suction_capacity":{"type":"string","index":"not_analyzed"},"airtight":{"type":"string","index":"not_analyzed"},"alarm_clock":{"type":"string","index":"not_analyzed"},"alarm_type":{"type":"string","index":"not_analyzed"},"altimeter":{"type":"string","index":"not_analyzed"},"amd_processor":{"type":"string","index":"not_analyzed"},"analog_tv_reception":{"type":"string","index":"not_analyzed"},"antenna":{"type":"string","index":"not_analyzed"},"antenna_capacity":{"type":"string","index":"not_analyzed"},"antenna_system_-_am":{"type":"string","index":"not_analyzed"},"anti-skid_system":{"type":"string","index":"not_analyzed"},"anti_crease":{"type":"string","index":"not_analyzed"},"anti_skid_base":{"type":"string","index":"not_analyzed"},"anti_skid_seat":{"type":"string","index":"not_analyzed"},"applicable_area":{"type":"string","index":"not_analyzed"},"application_type":{"type":"string","index":"not_analyzed"},"applications":{"type":"string","index":"not_analyzed"},"applied_for":{"type":"string","index":"not_analyzed"},"architecture":{"type":"string","index":"not_analyzed"},"armrest_included":{"type":"string","index":"not_analyzed"},"artificial_flower_&_plant_included":{"type":"string","index":"not_analyzed"},"assembled":{"type":"string","index":"not_analyzed"},"assembly_required":{"type":"string","index":"not_analyzed"},"assorted_pack":{"type":"string","index":"not_analyzed"},"ati_graphics":{"type":"string","index":"not_analyzed"},"attached_handle":{"type":"string","index":"not_analyzed"},"attached_to":{"type":"string","index":"not_analyzed"},"attachment_compatible":{"type":"string","index":"not_analyzed"},"attachment_type":{"type":"string","index":"not_analyzed"},"attachments":{"type":"string","index":"not_analyzed"},"attachments_present":{"type":"string","index":"not_analyzed"},"atx_power_connectors":{"type":"string","index":"not_analyzed"},"audible_alarm":{"type":"string","index":"not_analyzed"},"audio_channels":{"type":"string","index":"not_analyzed"},"audio_codec":{"type":"string","index":"not_analyzed"},"audio_connector":{"type":"string","index":"not_analyzed"},"audio_decoding_formats":{"type":"string","index":"not_analyzed"},"audio_formats_supported":{"type":"string","index":"not_analyzed"},"audio_i\/o_channels":{"type":"string","index":"not_analyzed"},"audio_jack":{"type":"string","index":"not_analyzed"},"audio_out_(analog)":{"type":"string","index":"not_analyzed"},"audio_out_(coaxial)":{"type":"string","index":"not_analyzed"},"audio_output":{"type":"string","index":"not_analyzed"},"audio_playback_formats":{"type":"string","index":"not_analyzed"},"auto-revolving_heater":{"type":"string","index":"not_analyzed"},"auto_cook_menu":{"type":"string","index":"not_analyzed"},"auto_indian_cook_menu":{"type":"string","index":"not_analyzed"},"auto_louver_movement":{"type":"string","index":"not_analyzed"},"auto_restart":{"type":"string","index":"not_analyzed"},"auto_shut_down":{"type":"string","index":"not_analyzed"},"auto_shut_off":{"type":"string","index":"not_analyzed"},"auto_start_function":{"type":"string","index":"not_analyzed"},"autolift_feature":{"type":"string","index":"not_analyzed"},"automatic_shut-off":{"type":"string","index":"not_analyzed"},"automatic_shut_off":{"type":"string","index":"not_analyzed"},"av_digital_output":{"type":"string","index":"not_analyzed"},"av_multi_output":{"type":"string","index":"not_analyzed"},"back_hieght":{"type":"string","index":"not_analyzed"},"back_type":{"type":"string","index":"not_analyzed"},"back_up_time":{"type":"string","index":"not_analyzed"},"back_width":{"type":"string","index":"not_analyzed"},"backing_material":{"type":"string","index":"not_analyzed"},"backrest":{"type":"string","index":"not_analyzed"},"bag_capacity":{"type":"string","index":"not_analyzed"},"bag_design":{"type":"string","index":"not_analyzed"},"bag_size":{"type":"string","index":"not_analyzed"},"bag_type":{"type":"string","index":"not_analyzed"},"baking":{"type":"string","index":"not_analyzed"},"bandwidth":{"type":"string","index":"not_analyzed"},"barometer":{"type":"string","index":"not_analyzed"},"barware_included":{"type":"string","index":"not_analyzed"},"base_diameter":{"type":"string","index":"not_analyzed"},"base_features":{"type":"string","index":"not_analyzed"},"base_frequency":{"type":"string","index":"not_analyzed"},"base_material":{"type":"string","index":"not_analyzed"},"batteries_included":{"type":"string","index":"not_analyzed"},"battery":{"type":"string","index":"not_analyzed"},"battery_backup":{"type":"string","index":"not_analyzed"},"battery_capacity":{"type":"string","index":"not_analyzed"},"battery_included":{"type":"string","index":"not_analyzed"},"battery_life":{"type":"string","index":"not_analyzed"},"battery_required":{"type":"string","index":"not_analyzed"},"battery_requirements":{"type":"string","index":"not_analyzed"},"battery_size":{"type":"string","index":"not_analyzed"},"battery_type":{"type":"string","index":"not_analyzed"},"bed_depth":{"type":"string","index":"not_analyzed"},"bed_design":{"type":"string","index":"not_analyzed"},"bed_height":{"type":"string","index":"not_analyzed"},"bed_size":{"type":"string","index":"not_analyzed"},"bed_skirt_type":{"type":"string","index":"not_analyzed"},"bed_type":{"type":"string","index":"not_analyzed"},"bed_weight":{"type":"string","index":"not_analyzed"},"bed_width":{"type":"string","index":"not_analyzed"},"bedding_size":{"type":"string","index":"not_analyzed"},"belt_included":{"type":"string","index":"not_analyzed"},"belt_loops":{"type":"string","index":"not_analyzed"},"bios":{"type":"string","index":"not_analyzed"},"black_&_white_poster":{"type":"string","index":"not_analyzed"},"black_til":{"type":"string","index":"not_analyzed"},"blade_included":{"type":"string","index":"not_analyzed"},"blade_length":{"type":"string","index":"not_analyzed"},"blade_material":{"type":"string","index":"not_analyzed"},"blade_sweep":{"type":"string","index":"not_analyzed"},"blendable":{"type":"string","index":"not_analyzed"},"blind_weights":{"type":"string","index":"not_analyzed"},"blouse_piece":{"type":"string","index":"not_analyzed"},"blower\/fan":{"type":"string","index":"not_analyzed"},"blower\/fan_material":{"type":"string","index":"not_analyzed"},"bluetooth":{"type":"string","index":"not_analyzed"},"bluetooth_enabled":{"type":"string","index":"not_analyzed"},"bluetooth_version":{"type":"string","index":"not_analyzed"},"board_material":{"type":"string","index":"not_analyzed"},"board_size":{"type":"string","index":"not_analyzed"},"body_finish":{"type":"string","index":"not_analyzed"},"body_material":{"type":"string","index":"not_analyzed"},"body_style":{"type":"string","index":"not_analyzed"},"book_shelf_included":{"type":"string","index":"not_analyzed"},"boot_shaft_height":{"type":"string","index":"not_analyzed"},"bootie":{"type":"string","index":"not_analyzed"},"bottle_size_compatibility":{"type":"string","index":"not_analyzed"},"bottom_diameter":{"type":"string","index":"not_analyzed"},"box_depth":{"type":"string","index":"not_analyzed"},"box_height":{"type":"string","index":"not_analyzed"},"box_width":{"type":"string","index":"not_analyzed"},"bpa_free":{"type":"string","index":"not_analyzed"},"brand_color":{"type":"string","index":"not_analyzed"},"brand_fit":{"type":"string","index":"not_analyzed"},"breathable":{"type":"string","index":"not_analyzed"},"brightness":{"type":"string","index":"not_analyzed"},"bristle_material":{"type":"string","index":"not_analyzed"},"broiler_safe":{"type":"string","index":"not_analyzed"},"broom_clip":{"type":"string","index":"not_analyzed"},"brush_material":{"type":"string","index":"not_analyzed"},"bucket_material":{"type":"string","index":"not_analyzed"},"bucket_weight":{"type":"string","index":"not_analyzed"},"buffered\/unbuffered":{"type":"string","index":"not_analyzed"},"build_material":{"type":"string","index":"not_analyzed"},"built-in_audio_interface":{"type":"string","index":"not_analyzed"},"built-in_handle":{"type":"string","index":"not_analyzed"},"built-in_ladder":{"type":"string","index":"not_analyzed"},"built-in_light":{"type":"string","index":"not_analyzed"},"built-in_mixer":{"type":"string","index":"not_analyzed"},"built-in_soundcard":{"type":"string","index":"not_analyzed"},"built-in_wringer":{"type":"string","index":"not_analyzed"},"built_in_microphone":{"type":"string","index":"not_analyzed"},"bulb_":{"type":"string","index":"not_analyzed"},"bulb_base":{"type":"string","index":"not_analyzed"},"bulb_type":{"type":"string","index":"not_analyzed"},"burner_material":{"type":"string","index":"not_analyzed"},"burner_type":{"type":"string","index":"not_analyzed"},"burst_length":{"type":"string","index":"not_analyzed"},"bus-core_ratio":{"type":"string","index":"not_analyzed"},"bus_speed":{"type":"string","index":"not_analyzed"},"bus_standard":{"type":"string","index":"not_analyzed"},"bush_included":{"type":"string","index":"not_analyzed"},"butter_tray":{"type":"string","index":"not_analyzed"},"cabin_size":{"type":"string","index":"not_analyzed"},"cable":{"type":"string","index":"not_analyzed"},"cable_interface":{"type":"string","index":"not_analyzed"},"cable_length":{"type":"string","index":"not_analyzed"},"cable_type":{"type":"string","index":"not_analyzed"},"cache_size":{"type":"string","index":"not_analyzed"},"calendar":{"type":"string","index":"not_analyzed"},"call_controls":{"type":"string","index":"not_analyzed"},"call_function":{"type":"string","index":"not_analyzed"},"call_transfer":{"type":"string","index":"not_analyzed"},"caller_id_feature":{"type":"string","index":"not_analyzed"},"calorie":{"type":"string","index":"not_analyzed"},"camphor":{"type":"string","index":"not_analyzed"},"candle_height":{"type":"string","index":"not_analyzed"},"canopy":{"type":"string","index":"not_analyzed"},"cap_type":{"type":"string","index":"not_analyzed"},"capacity":{"type":"string","index":"not_analyzed"},"capacity_(gb)":{"type":"string","index":"not_analyzed"},"capacity_in_tons":{"type":"string","index":"not_analyzed"},"carb_hole":{"type":"string","index":"not_analyzed"},"care_and_cleaning":{"type":"string","index":"not_analyzed"},"care_instructions":{"type":"string","index":"not_analyzed"},"carrying\/transport_options":{"type":"string","index":"not_analyzed"},"case_material":{"type":"string","index":"not_analyzed"},"casserole_type":{"type":"string","index":"not_analyzed"},"castor_wheels":{"type":"string","index":"not_analyzed"},"category_path":{"type":"string","index":"not_analyzed"},"cavity_diameter":{"type":"string","index":"not_analyzed"},"cavity_features":{"type":"string","index":"not_analyzed"},"cd":{"type":"string","index":"not_analyzed"},"cd_player":{"type":"string","index":"not_analyzed"},"cd_type":{"type":"string","index":"not_analyzed"},"central_processing_unit":{"type":"string","index":"not_analyzed"},"centrifugal_juicer":{"type":"string","index":"not_analyzed"},"certification":{"type":"string","index":"not_analyzed"},"chain_included":{"type":"string","index":"not_analyzed"},"chain_provided":{"type":"string","index":"not_analyzed"},"chair_depth":{"type":"string","index":"not_analyzed"},"chair_height":{"type":"string","index":"not_analyzed"},"chair_weight":{"type":"string","index":"not_analyzed"},"chair_width":{"type":"string","index":"not_analyzed"},"chamber_present":{"type":"string","index":"not_analyzed"},"channel_equalizer_type":{"type":"string","index":"not_analyzed"},"character":{"type":"string","index":"not_analyzed"},"charge_time":{"type":"string","index":"not_analyzed"},"charger_type":{"type":"string","index":"not_analyzed"},"chassis_material":{"type":"string","index":"not_analyzed"},"chemical_resistant":{"type":"string","index":"not_analyzed"},"chest_size":{"type":"string","index":"not_analyzed"},"child_lock":{"type":"string","index":"not_analyzed"},"chipset":{"type":"string","index":"not_analyzed"},"chipset_manufacturer":{"type":"string","index":"not_analyzed"},"choli_fabric":{"type":"string","index":"not_analyzed"},"chopping_blade":{"type":"string","index":"not_analyzed"},"christmas_tree_included":{"type":"string","index":"not_analyzed"},"chronograph":{"type":"string","index":"not_analyzed"},"circumference":{"type":"string","index":"not_analyzed"},"citrus_juicer":{"type":"string","index":"not_analyzed"},"clamp_included":{"type":"string","index":"not_analyzed"},"clasp_type":{"type":"string","index":"not_analyzed"},"class":{"type":"string","index":"not_analyzed"},"classes":{"type":"string","index":"not_analyzed"},"cleaning":{"type":"string","index":"not_analyzed"},"cleaning_and_care":{"type":"string","index":"not_analyzed"},"cleaning_type":{"type":"string","index":"not_analyzed"},"clock":{"type":"string","index":"not_analyzed"},"clock_type":{"type":"string","index":"not_analyzed"},"closed_depth":{"type":"string","index":"not_analyzed"},"closed_height":{"type":"string","index":"not_analyzed"},"closed_width":{"type":"string","index":"not_analyzed"},"closest_focus_distance":{"type":"string","index":"not_analyzed"},"closure_mechanism":{"type":"string","index":"not_analyzed"},"closure_type":{"type":"string","index":"not_analyzed"},"cloth_size":{"type":"string","index":"not_analyzed"},"coat_type":{"type":"string","index":"not_analyzed"},"coating":{"type":"string","index":"not_analyzed"},"coffee_table_included":{"type":"string","index":"not_analyzed"},"colander_included":{"type":"string","index":"not_analyzed"},"collapsible":{"type":"string","index":"not_analyzed"},"collar":{"type":"string","index":"not_analyzed"},"collection":{"type":"string","index":"not_analyzed"},"collection_tray_included":{"type":"string","index":"not_analyzed"},"color":{"type":"string","index":"not_analyzed"},"color_poster":{"type":"string","index":"not_analyzed"},"comforter_length":{"type":"string","index":"not_analyzed"},"comforter_width":{"type":"string","index":"not_analyzed"},"common_name":{"type":"string","index":"not_analyzed"},"compass":{"type":"string","index":"not_analyzed"},"compatible_baby_weight":{"type":"string","index":"not_analyzed"},"compatible_battery_types":{"type":"string","index":"not_analyzed"},"compatible_brand_names":{"type":"string","index":"not_analyzed"},"compatible_device":{"type":"string","index":"not_analyzed"},"compatible_female_connectors":{"type":"string","index":"not_analyzed"},"compatible_headset_port_size":{"type":"string","index":"not_analyzed"},"compatible_idol_length":{"type":"string","index":"not_analyzed"},"compatible_idol_width":{"type":"string","index":"not_analyzed"},"compatible_image_format":{"type":"string","index":"not_analyzed"},"compatible_laptop_size":{"type":"string","index":"not_analyzed"},"compatible_laptops":{"type":"string","index":"not_analyzed"},"compatible_male_connectors":{"type":"string","index":"not_analyzed"},"compatible_mmc":{"type":"string","index":"not_analyzed"},"compatible_model":{"type":"string","index":"not_analyzed"},"compatible_paper_width":{"type":"string","index":"not_analyzed"},"compatible_processors":{"type":"string","index":"not_analyzed"},"compatible_software":{"type":"string","index":"not_analyzed"},"compatible_systems":{"type":"string","index":"not_analyzed"},"compatible_tip_size":{"type":"string","index":"not_analyzed"},"compatible_usb_type":{"type":"string","index":"not_analyzed"},"compatible_with":{"type":"string","index":"not_analyzed"},"compressible":{"type":"string","index":"not_analyzed"},"compressor":{"type":"string","index":"not_analyzed"},"condenser_fin_type":{"type":"string","index":"not_analyzed"},"conference_calls":{"type":"string","index":"not_analyzed"},"configuration":{"type":"string","index":"not_analyzed"},"connectivity":{"type":"string","index":"not_analyzed"},"connector_material":{"type":"string","index":"not_analyzed"},"connector_plating":{"type":"string","index":"not_analyzed"},"connector_size":{"type":"string","index":"not_analyzed"},"connector_type":{"type":"string","index":"not_analyzed"},"connectors":{"type":"string","index":"not_analyzed"},"console_type":{"type":"string","index":"not_analyzed"},"container_type":{"type":"string","index":"not_analyzed"},"contrast_ratio":{"type":"string","index":"not_analyzed"},"control":{"type":"string","index":"not_analyzed"},"control_mechanism":{"type":"string","index":"not_analyzed"},"control_panel_type":{"type":"string","index":"not_analyzed"},"control_system":{"type":"string","index":"not_analyzed"},"control_type":{"type":"string","index":"not_analyzed"},"controller_ports":{"type":"string","index":"not_analyzed"},"controllers":{"type":"string","index":"not_analyzed"},"controls":{"type":"string","index":"not_analyzed"},"convertible":{"type":"string","index":"not_analyzed"},"cooking":{"type":"string","index":"not_analyzed"},"cooking_completion_indicator":{"type":"string","index":"not_analyzed"},"cooking_plate":{"type":"string","index":"not_analyzed"},"cookware_included":{"type":"string","index":"not_analyzed"},"cool_touch_handle":{"type":"string","index":"not_analyzed"},"cooling_and_heatsink":{"type":"string","index":"not_analyzed"},"cooling_capacity":{"type":"string","index":"not_analyzed"},"cooling_coverage_area":{"type":"string","index":"not_analyzed"},"cooling_media":{"type":"string","index":"not_analyzed"},"cord_material":{"type":"string","index":"not_analyzed"},"cord_type":{"type":"string","index":"not_analyzed"},"corded\/cordless":{"type":"string","index":"not_analyzed"},"corkscrew_type":{"type":"string","index":"not_analyzed"},"cornice_included":{"type":"string","index":"not_analyzed"},"corrosion_resistant":{"type":"string","index":"not_analyzed"},"cost_per_page":{"type":"string","index":"not_analyzed"},"country_of_manufacture":{"type":"string","index":"not_analyzed"},"cover":{"type":"string","index":"not_analyzed"},"cover_material":{"type":"string","index":"not_analyzed"},"cover_type":{"type":"string","index":"not_analyzed"},"coverage_area":{"type":"string","index":"not_analyzed"},"covered_in_warranty":{"type":"string","index":"not_analyzed"},"cpu_compartment":{"type":"string","index":"not_analyzed"},"cuff":{"type":"string","index":"not_analyzed"},"cups":{"type":"string","index":"not_analyzed"},"currency_value":{"type":"string","index":"not_analyzed"},"current_required":{"type":"string","index":"not_analyzed"},"cushion_material":{"type":"string","index":"not_analyzed"},"customisable":{"type":"string","index":"not_analyzed"},"customize_size":{"type":"string","index":"not_analyzed"},"cutlery_capacity":{"type":"string","index":"not_analyzed"},"cutter_type":{"type":"string","index":"not_analyzed"},"cutting_diameter":{"type":"string","index":"not_analyzed"},"cutting_length":{"type":"string","index":"not_analyzed"},"cutting_width":{"type":"string","index":"not_analyzed"},"data_download_speed":{"type":"string","index":"not_analyzed"},"data_transfer_rate":{"type":"string","index":"not_analyzed"},"database":{"type":"string","index":"not_analyzed"},"date_&_time_display":{"type":"string","index":"not_analyzed"},"decoding_capabilities":{"type":"string","index":"not_analyzed"},"decoration_type":{"type":"string","index":"not_analyzed"},"decorations_included":{"type":"string","index":"not_analyzed"},"dedicated_buttons":{"type":"string","index":"not_analyzed"},"deep_bass":{"type":"string","index":"not_analyzed"},"defrosting_type":{"type":"string","index":"not_analyzed"},"deity":{"type":"string","index":"not_analyzed"},"delay_start":{"type":"string","index":"not_analyzed"},"delivery_condition":{"type":"string","index":"not_analyzed"},"demo_details":{"type":"string","index":"not_analyzed"},"depth":{"type":"string","index":"not_analyzed"},"design":{"type":"string","index":"not_analyzed"},"design_code":{"type":"string","index":"not_analyzed"},"designed_for":{"type":"string","index":"not_analyzed"},"desktop_publishing":{"type":"string","index":"not_analyzed"},"detachable_blades":{"type":"string","index":"not_analyzed"},"detachable_mouthpiece":{"type":"string","index":"not_analyzed"},"detection_range":{"type":"string","index":"not_analyzed"},"developer":{"type":"string","index":"not_analyzed"},"device_management":{"type":"string","index":"not_analyzed"},"dhoop":{"type":"string","index":"not_analyzed"},"dial_color":{"type":"string","index":"not_analyzed"},"dial_shape":{"type":"string","index":"not_analyzed"},"diameter":{"type":"string","index":"not_analyzed"},"digital_display":{"type":"string","index":"not_analyzed"},"digital_zoom":{"type":"string","index":"not_analyzed"},"dimensions":{"type":"string","index":"not_analyzed"},"dimmer":{"type":"string","index":"not_analyzed"},"diopter_adjustment_range":{"type":"string","index":"not_analyzed"},"disc_capacity":{"type":"string","index":"not_analyzed"},"disc_load_capacity":{"type":"string","index":"not_analyzed"},"dish_type":{"type":"string","index":"not_analyzed"},"dishwasher_safe":{"type":"string","index":"not_analyzed"},"disk_drive":{"type":"string","index":"not_analyzed"},"display":{"type":"string","index":"not_analyzed"},"display_indicator_functions":{"type":"string","index":"not_analyzed"},"display_resolution":{"type":"string","index":"not_analyzed"},"display_size":{"type":"string","index":"not_analyzed"},"display_technology":{"type":"string","index":"not_analyzed"},"display_type":{"type":"string","index":"not_analyzed"},"disposable":{"type":"string","index":"not_analyzed"},"domestic_term":{"type":"string","index":"not_analyzed"},"domestic_warranty":{"type":"string","index":"not_analyzed"},"door_alarm":{"type":"string","index":"not_analyzed"},"door_finish":{"type":"string","index":"not_analyzed"},"door_included":{"type":"string","index":"not_analyzed"},"door_lock":{"type":"string","index":"not_analyzed"},"door_type":{"type":"string","index":"not_analyzed"},"downtube_length":{"type":"string","index":"not_analyzed"},"dp_buckle":{"type":"string","index":"not_analyzed"},"drainer_present":{"type":"string","index":"not_analyzed"},"draining_hole":{"type":"string","index":"not_analyzed"},"drawer_type":{"type":"string","index":"not_analyzed"},"dressing_table_depth":{"type":"string","index":"not_analyzed"},"dressing_table_height":{"type":"string","index":"not_analyzed"},"dressing_table_weight":{"type":"string","index":"not_analyzed"},"dressing_table_width":{"type":"string","index":"not_analyzed"},"driver_type":{"type":"string","index":"not_analyzed"},"drop_length":{"type":"string","index":"not_analyzed"},"dry_grinding":{"type":"string","index":"not_analyzed"},"dryer_capacity":{"type":"string","index":"not_analyzed"},"drying_length":{"type":"string","index":"not_analyzed"},"dual_sided":{"type":"string","index":"not_analyzed"},"ductless":{"type":"string","index":"not_analyzed"},"duplex_print":{"type":"string","index":"not_analyzed"},"durability":{"type":"string","index":"not_analyzed"},"dust_filter":{"type":"string","index":"not_analyzed"},"dust_reduction":{"type":"string","index":"not_analyzed"},"dust_resistant":{"type":"string","index":"not_analyzed"},"duty_cycle_":{"type":"string","index":"not_analyzed"},"dvd_player":{"type":"string","index":"not_analyzed"},"dvi_and_hdmi_interface":{"type":"string","index":"not_analyzed"},"dvi_ports":{"type":"string","index":"not_analyzed"},"edger_capable":{"type":"string","index":"not_analyzed"},"edible":{"type":"string","index":"not_analyzed"},"edible_color_included":{"type":"string","index":"not_analyzed"},"education_board":{"type":"string","index":"not_analyzed"},"eer":{"type":"string","index":"not_analyzed"},"efficiency":{"type":"string","index":"not_analyzed"},"egg_tray":{"type":"string","index":"not_analyzed"},"electric":{"type":"string","index":"not_analyzed"},"electric_stirrer":{"type":"string","index":"not_analyzed"},"electronic":{"type":"string","index":"not_analyzed"},"embellishments":{"type":"string","index":"not_analyzed"},"embroidered":{"type":"string","index":"not_analyzed"},"emergency_power_off":{"type":"string","index":"not_analyzed"},"enclosure_type":{"type":"string","index":"not_analyzed"},"encryption":{"type":"string","index":"not_analyzed"},"end_table_included":{"type":"string","index":"not_analyzed"},"energy_saving":{"type":"string","index":"not_analyzed"},"engine_type":{"type":"string","index":"not_analyzed"},"error_check":{"type":"string","index":"not_analyzed"},"error_correcting_support":{"type":"string","index":"not_analyzed"},"estimated_delivery_time":{"type":"string","index":"not_analyzed"},"ethernet":{"type":"string","index":"not_analyzed"},"ethernet_(rj45)":{"type":"string","index":"not_analyzed"},"ethernet_controller":{"type":"string","index":"not_analyzed"},"ethernet_features":{"type":"string","index":"not_analyzed"},"ethernet_support":{"type":"string","index":"not_analyzed"},"evaporator_fin_type":{"type":"string","index":"not_analyzed"},"exit_pupil":{"type":"string","index":"not_analyzed"},"expandable":{"type":"string","index":"not_analyzed"},"expandable_memory":{"type":"string","index":"not_analyzed"},"expandable_storage_capacity":{"type":"string","index":"not_analyzed"},"expansion_handsets":{"type":"string","index":"not_analyzed"},"extendable":{"type":"string","index":"not_analyzed"},"extendable_handle":{"type":"string","index":"not_analyzed"},"exterior_size":{"type":"string","index":"not_analyzed"},"external_depth":{"type":"string","index":"not_analyzed"},"external_graphics_card_support":{"type":"string","index":"not_analyzed"},"external_height":{"type":"string","index":"not_analyzed"},"external_material":{"type":"string","index":"not_analyzed"},"external_power_required":{"type":"string","index":"not_analyzed"},"external_width":{"type":"string","index":"not_analyzed"},"eye_relief":{"type":"string","index":"not_analyzed"},"fabric":{"type":"string","index":"not_analyzed"},"fabric_care":{"type":"string","index":"not_analyzed"},"fade_resistant":{"type":"string","index":"not_analyzed"},"fastening_mechanism":{"type":"string","index":"not_analyzed"},"feather_type":{"type":"string","index":"not_analyzed"},"features":{"type":"string","index":"not_analyzed"},"feed_system":{"type":"string","index":"not_analyzed"},"file_cabinet_type":{"type":"string","index":"not_analyzed"},"filling_amount":{"type":"string","index":"not_analyzed"},"filling_material":{"type":"string","index":"not_analyzed"},"filling_type":{"type":"string","index":"not_analyzed"},"filter_block_indicator":{"type":"string","index":"not_analyzed"},"filter_present":{"type":"string","index":"not_analyzed"},"filter_type":{"type":"string","index":"not_analyzed"},"finish":{"type":"string","index":"not_analyzed"},"finish_color":{"type":"string","index":"not_analyzed"},"finish_type":{"type":"string","index":"not_analyzed"},"fire_retardant_cable":{"type":"string","index":"not_analyzed"},"firewall":{"type":"string","index":"not_analyzed"},"fit":{"type":"string","index":"not_analyzed"},"fit_type":{"type":"string","index":"not_analyzed"},"fitting_type":{"type":"string","index":"not_analyzed"},"fixing_method":{"type":"string","index":"not_analyzed"},"fixture_type":{"type":"string","index":"not_analyzed"},"fixtures_&_fittings_included":{"type":"string","index":"not_analyzed"},"flame_safe":{"type":"string","index":"not_analyzed"},"flash":{"type":"string","index":"not_analyzed"},"flash_duration":{"type":"string","index":"not_analyzed"},"flash_modes":{"type":"string","index":"not_analyzed"},"flash_range":{"type":"string","index":"not_analyzed"},"flask_material":{"type":"string","index":"not_analyzed"},"flat_sheet_length":{"type":"string","index":"not_analyzed"},"flat_sheet_width":{"type":"string","index":"not_analyzed"},"flatwire":{"type":"string","index":"not_analyzed"},"flavor":{"type":"string","index":"not_analyzed"},"flexible":{"type":"string","index":"not_analyzed"},"flexible_bristles":{"type":"string","index":"not_analyzed"},"flexible_lip":{"type":"string","index":"not_analyzed"},"flow_rate":{"type":"string","index":"not_analyzed"},"flower_material":{"type":"string","index":"not_analyzed"},"flowering_plant":{"type":"string","index":"not_analyzed"},"fly":{"type":"string","index":"not_analyzed"},"foam_bottom":{"type":"string","index":"not_analyzed"},"focal_length":{"type":"string","index":"not_analyzed"},"focus":{"type":"string","index":"not_analyzed"},"foldable":{"type":"string","index":"not_analyzed"},"foldable_umbrella":{"type":"string","index":"not_analyzed"},"font_type":{"type":"string","index":"not_analyzed"},"foot_coverage":{"type":"string","index":"not_analyzed"},"footrest_included":{"type":"string","index":"not_analyzed"},"footwear_rack_included":{"type":"string","index":"not_analyzed"},"form":{"type":"string","index":"not_analyzed"},"form_factor":{"type":"string","index":"not_analyzed"},"formulation":{"type":"string","index":"not_analyzed"},"fragrance":{"type":"string","index":"not_analyzed"},"fragrance_intensity_control":{"type":"string","index":"not_analyzed"},"fragrance_type":{"type":"string","index":"not_analyzed"},"frame_color":{"type":"string","index":"not_analyzed"},"frame_material":{"type":"string","index":"not_analyzed"},"frame_rate":{"type":"string","index":"not_analyzed"},"freezer_interior_light":{"type":"string","index":"not_analyzed"},"freezer_safe":{"type":"string","index":"not_analyzed"},"freezer_tray_type":{"type":"string","index":"not_analyzed"},"frequency":{"type":"string","index":"not_analyzed"},"frequency_band":{"type":"string","index":"not_analyzed"},"frequency_range":{"type":"string","index":"not_analyzed"},"frequency_response":{"type":"string","index":"not_analyzed"},"front_panel_headers":{"type":"string","index":"not_analyzed"},"front_ports":{"type":"string","index":"not_analyzed"},"function_type":{"type":"string","index":"not_analyzed"},"functions":{"type":"string","index":"not_analyzed"},"funnel_capacity":{"type":"string","index":"not_analyzed"},"funnel_expand":{"type":"string","index":"not_analyzed"},"game_modes":{"type":"string","index":"not_analyzed"},"garland":{"type":"string","index":"not_analyzed"},"gas_type":{"type":"string","index":"not_analyzed"},"gasket_type":{"type":"string","index":"not_analyzed"},"genre":{"type":"string","index":"not_analyzed"},"glass_type":{"type":"string","index":"not_analyzed"},"gps":{"type":"string","index":"not_analyzed"},"gpu_clock":{"type":"string","index":"not_analyzed"},"graphic_processor":{"type":"string","index":"not_analyzed"},"graphics":{"type":"string","index":"not_analyzed"},"graphics_engine":{"type":"string","index":"not_analyzed"},"graphics_technologies_supported":{"type":"string","index":"not_analyzed"},"grating_blade":{"type":"string","index":"not_analyzed"},"grinding":{"type":"string","index":"not_analyzed"},"grip_type":{"type":"string","index":"not_analyzed"},"ground_clearance":{"type":"string","index":"not_analyzed"},"gsm_(edge\/gprs)":{"type":"string","index":"not_analyzed"},"guide_number":{"type":"string","index":"not_analyzed"},"hand_washable":{"type":"string","index":"not_analyzed"},"handcrafted":{"type":"string","index":"not_analyzed"},"handle":{"type":"string","index":"not_analyzed"},"handle_available":{"type":"string","index":"not_analyzed"},"handle_included":{"type":"string","index":"not_analyzed"},"handle_material":{"type":"string","index":"not_analyzed"},"handle_present":{"type":"string","index":"not_analyzed"},"handle_type":{"type":"string","index":"not_analyzed"},"handmade":{"type":"string","index":"not_analyzed"},"hands_free_support":{"type":"string","index":"not_analyzed"},"handset_battery":{"type":"string","index":"not_analyzed"},"handset_color":{"type":"string","index":"not_analyzed"},"hang_hole":{"type":"string","index":"not_analyzed"},"hanging_ring":{"type":"string","index":"not_analyzed"},"hanging_space":{"type":"string","index":"not_analyzed"},"hard_disk":{"type":"string","index":"not_analyzed"},"hard_disk_capacity":{"type":"string","index":"not_analyzed"},"hard_drive":{"type":"string","index":"not_analyzed"},"hardware_memory":{"type":"string","index":"not_analyzed"},"harness_type":{"type":"string","index":"not_analyzed"},"hd":{"type":"string","index":"not_analyzed"},"hd_technology_&_resolution":{"type":"string","index":"not_analyzed"},"hdcp_support":{"type":"string","index":"not_analyzed"},"hdd_capacity":{"type":"string","index":"not_analyzed"},"hdmi":{"type":"string","index":"not_analyzed"},"hdmi_port":{"type":"string","index":"not_analyzed"},"hdmi_ports":{"type":"string","index":"not_analyzed"},"head_material":{"type":"string","index":"not_analyzed"},"head_support":{"type":"string","index":"not_analyzed"},"headphone_driver_units":{"type":"string","index":"not_analyzed"},"headphone_jack":{"type":"string","index":"not_analyzed"},"headphone_type":{"type":"string","index":"not_analyzed"},"headset_design":{"type":"string","index":"not_analyzed"},"headset_driver_units":{"type":"string","index":"not_analyzed"},"headset_frequency_response":{"type":"string","index":"not_analyzed"},"headset_impedance":{"type":"string","index":"not_analyzed"},"heat_resistant":{"type":"string","index":"not_analyzed"},"heat_up_time":{"type":"string","index":"not_analyzed"},"heater_material":{"type":"string","index":"not_analyzed"},"heating_element":{"type":"string","index":"not_analyzed"},"heating_element_type":{"type":"string","index":"not_analyzed"},"heating_mechanism":{"type":"string","index":"not_analyzed"},"heating_substances":{"type":"string","index":"not_analyzed"},"heating_time":{"type":"string","index":"not_analyzed"},"heel_height":{"type":"string","index":"not_analyzed"},"height":{"type":"string","index":"not_analyzed"},"height_adjustable_rack":{"type":"string","index":"not_analyzed"},"height_of_microphone":{"type":"string","index":"not_analyzed"},"hem":{"type":"string","index":"not_analyzed"},"herbal":{"type":"string","index":"not_analyzed"},"holders_present":{"type":"string","index":"not_analyzed"},"hood_attached":{"type":"string","index":"not_analyzed"},"hooded":{"type":"string","index":"not_analyzed"},"hooks_available":{"type":"string","index":"not_analyzed"},"hooks_present":{"type":"string","index":"not_analyzed"},"horizontal_scanning_frequencies":{"type":"string","index":"not_analyzed"},"horizontal_viewing_angle":{"type":"string","index":"not_analyzed"},"hot_plate_type":{"type":"string","index":"not_analyzed"},"housing_type":{"type":"string","index":"not_analyzed"},"ice_chamber":{"type":"string","index":"not_analyzed"},"ice_cube_tray_type":{"type":"string","index":"not_analyzed"},"ideal_for":{"type":"string","index":"not_analyzed"},"ideal_location":{"type":"string","index":"not_analyzed"},"ideal_placement_height":{"type":"string","index":"not_analyzed"},"idol_included":{"type":"string","index":"not_analyzed"},"ignition_system":{"type":"string","index":"not_analyzed"},"illuminated":{"type":"string","index":"not_analyzed"},"illuminated_keys":{"type":"string","index":"not_analyzed"},"image_enhancements_features":{"type":"string","index":"not_analyzed"},"image_format":{"type":"string","index":"not_analyzed"},"image_sensor_resolution":{"type":"string","index":"not_analyzed"},"image_url_small":{"type":"string","index":"not_analyzed"},"image_url_thumbnail":{"type":"string","index":"not_analyzed"},"image_url_xlarge":{"type":"string","index":"not_analyzed"},"impedance":{"type":"string","index":"not_analyzed"},"impedance_subwoofer_(ohms)":{"type":"string","index":"not_analyzed"},"important_note":{"type":"string","index":"not_analyzed"},"in-built_heater":{"type":"string","index":"not_analyzed"},"in-built_oil_collector":{"type":"string","index":"not_analyzed"},"in_the_box":{"type":"string","index":"not_analyzed"},"included_software_name":{"type":"string","index":"not_analyzed"},"indicator_type":{"type":"string","index":"not_analyzed"},"indoor":{"type":"string","index":"not_analyzed"},"indoor_noise_level":{"type":"string","index":"not_analyzed"},"induction_bottom":{"type":"string","index":"not_analyzed"},"induction_safe":{"type":"string","index":"not_analyzed"},"inflatable":{"type":"string","index":"not_analyzed"},"inner_diameter":{"type":"string","index":"not_analyzed"},"inner_fabric":{"type":"string","index":"not_analyzed"},"inner_material":{"type":"string","index":"not_analyzed"},"input\/output_connectors":{"type":"string","index":"not_analyzed"},"input_connection_type":{"type":"string","index":"not_analyzed"},"input_devices":{"type":"string","index":"not_analyzed"},"input_frequency":{"type":"string","index":"not_analyzed"},"input_power":{"type":"string","index":"not_analyzed"},"input_tray_capacity":{"type":"string","index":"not_analyzed"},"input_tray_type":{"type":"string","index":"not_analyzed"},"input_voltage":{"type":"string","index":"not_analyzed"},"installation":{"type":"string","index":"not_analyzed"},"installation_&_demo_details":{"type":"string","index":"not_analyzed"},"installation_details":{"type":"string","index":"not_analyzed"},"installation_features":{"type":"string","index":"not_analyzed"},"instruction_sets":{"type":"string","index":"not_analyzed"},"integrated_graphic_processor":{"type":"string","index":"not_analyzed"},"integrated_graphics_card":{"type":"string","index":"not_analyzed"},"intel_processor":{"type":"string","index":"not_analyzed"},"intel_smart_cache":{"type":"string","index":"not_analyzed"},"interactive":{"type":"string","index":"not_analyzed"},"interactive_features":{"type":"string","index":"not_analyzed"},"interchangable_sieve":{"type":"string","index":"not_analyzed"},"interface":{"type":"string","index":"not_analyzed"},"interior_size":{"type":"string","index":"not_analyzed"},"internal_memory":{"type":"string","index":"not_analyzed"},"internal_storage":{"type":"string","index":"not_analyzed"},"iso_rating":{"type":"string","index":"not_analyzed"},"jogwheels_present":{"type":"string","index":"not_analyzed"},"joint_size":{"type":"string","index":"not_analyzed"},"jug_included":{"type":"string","index":"not_analyzed"},"juicer_blade_material":{"type":"string","index":"not_analyzed"},"juicing":{"type":"string","index":"not_analyzed"},"kettle_material":{"type":"string","index":"not_analyzed"},"key_features":{"type":"string","index":"not_analyzed"},"keyboard_skin_included":{"type":"string","index":"not_analyzed"},"keyboard_tray":{"type":"string","index":"not_analyzed"},"keypad":{"type":"string","index":"not_analyzed"},"kneading":{"type":"string","index":"not_analyzed"},"knife_length":{"type":"string","index":"not_analyzed"},"knife_type":{"type":"string","index":"not_analyzed"},"knit_type":{"type":"string","index":"not_analyzed"},"knob_types":{"type":"string","index":"not_analyzed"},"lamination_included":{"type":"string","index":"not_analyzed"},"lamp_base_material":{"type":"string","index":"not_analyzed"},"lamp_shade_material":{"type":"string","index":"not_analyzed"},"lan":{"type":"string","index":"not_analyzed"},"language":{"type":"string","index":"not_analyzed"},"laptop_size":{"type":"string","index":"not_analyzed"},"large_table_height":{"type":"string","index":"not_analyzed"},"largest_table_depth":{"type":"string","index":"not_analyzed"},"largest_table_width":{"type":"string","index":"not_analyzed"},"laser_color":{"type":"string","index":"not_analyzed"},"latency":{"type":"string","index":"not_analyzed"},"layers":{"type":"string","index":"not_analyzed"},"lcd_screen_size":{"type":"string","index":"not_analyzed"},"led_indicator":{"type":"string","index":"not_analyzed"},"led_light":{"type":"string","index":"not_analyzed"},"led_stirrer":{"type":"string","index":"not_analyzed"},"leds":{"type":"string","index":"not_analyzed"},"lehenga_fabric":{"type":"string","index":"not_analyzed"},"length":{"type":"string","index":"not_analyzed"},"lens_present":{"type":"string","index":"not_analyzed"},"lens_type":{"type":"string","index":"not_analyzed"},"licenses":{"type":"string","index":"not_analyzed"},"lid_included":{"type":"string","index":"not_analyzed"},"lid_material":{"type":"string","index":"not_analyzed"},"lid_type":{"type":"string","index":"not_analyzed"},"life_indicator_present":{"type":"string","index":"not_analyzed"},"lifespan":{"type":"string","index":"not_analyzed"},"light_color":{"type":"string","index":"not_analyzed"},"light_source":{"type":"string","index":"not_analyzed"},"light_type":{"type":"string","index":"not_analyzed"},"light_used":{"type":"string","index":"not_analyzed"},"lighting_included":{"type":"string","index":"not_analyzed"},"lighting_present":{"type":"string","index":"not_analyzed"},"limited_edition":{"type":"string","index":"not_analyzed"},"line_diameter":{"type":"string","index":"not_analyzed"},"line_exit_type":{"type":"string","index":"not_analyzed"},"lining":{"type":"string","index":"not_analyzed"},"lip_material":{"type":"string","index":"not_analyzed"},"liquidizing_jar":{"type":"string","index":"not_analyzed"},"load_capacity":{"type":"string","index":"not_analyzed"},"load_options":{"type":"string","index":"not_analyzed"},"lockable_cabinet":{"type":"string","index":"not_analyzed"},"locking_facility":{"type":"string","index":"not_analyzed"},"locking_latch":{"type":"string","index":"not_analyzed"},"locking_system":{"type":"string","index":"not_analyzed"},"loung":{"type":"string","index":"not_analyzed"},"luminous":{"type":"string","index":"not_analyzed"},"lunch_box_capacity":{"type":"string","index":"not_analyzed"},"lunch_box_material":{"type":"string","index":"not_analyzed"},"mac_address_database":{"type":"string","index":"not_analyzed"},"machine_washable":{"type":"string","index":"not_analyzed"},"magnet_type":{"type":"string","index":"not_analyzed"},"magnification":{"type":"string","index":"not_analyzed"},"mail_features":{"type":"string","index":"not_analyzed"},"main_unit_power_source":{"type":"string","index":"not_analyzed"},"management_protocols":{"type":"string","index":"not_analyzed"},"manufacturing_process":{"type":"string","index":"not_analyzed"},"map_support":{"type":"string","index":"not_analyzed"},"material":{"type":"string","index":"not_analyzed"},"mattress_included":{"type":"string","index":"not_analyzed"},"max_output_rms_-_per_satellite_(w)":{"type":"string","index":"not_analyzed"},"max_output_rms_-_subwoofer_(w)":{"type":"string","index":"not_analyzed"},"maximum_age":{"type":"string","index":"not_analyzed"},"maximum_airflow":{"type":"string","index":"not_analyzed"},"maximum_alarm_distance":{"type":"string","index":"not_analyzed"},"maximum_cooling_temperature":{"type":"string","index":"not_analyzed"},"maximum_cycles":{"type":"string","index":"not_analyzed"},"maximum_display_size":{"type":"string","index":"not_analyzed"},"maximum_expandable_iso_sensitivity":{"type":"string","index":"not_analyzed"},"maximum_load":{"type":"string","index":"not_analyzed"},"maximum_memory_bandwidth":{"type":"string","index":"not_analyzed"},"maximum_memory_size_supported":{"type":"string","index":"not_analyzed"},"maximum_power_input":{"type":"string","index":"not_analyzed"},"maximum_print_resolution":{"type":"string","index":"not_analyzed"},"maximum_resolution":{"type":"string","index":"not_analyzed"},"maximum_shutter_speed":{"type":"string","index":"not_analyzed"},"maximum_spike_current":{"type":"string","index":"not_analyzed"},"maximum_spin_speed":{"type":"string","index":"not_analyzed"},"maximum_temperature":{"type":"string","index":"not_analyzed"},"maximum_weight_capacity":{"type":"string","index":"not_analyzed"},"maximum_wireless_transmission_rate":{"type":"string","index":"not_analyzed"},"measuring_range":{"type":"string","index":"not_analyzed"},"measuring_spoon_sizes":{"type":"string","index":"not_analyzed"},"mechanism":{"type":"string","index":"not_analyzed"},"media_format":{"type":"string","index":"not_analyzed"},"media_size_supported":{"type":"string","index":"not_analyzed"},"media_types_supported":{"type":"string","index":"not_analyzed"},"memory":{"type":"string","index":"not_analyzed"},"memory_card_slot_type":{"type":"string","index":"not_analyzed"},"memory_card_supported":{"type":"string","index":"not_analyzed"},"memory_card_type":{"type":"string","index":"not_analyzed"},"memory_channels_supported":{"type":"string","index":"not_analyzed"},"memory_clock":{"type":"string","index":"not_analyzed"},"memory_configuration":{"type":"string","index":"not_analyzed"},"memory_feature":{"type":"string","index":"not_analyzed"},"memory_frequency":{"type":"string","index":"not_analyzed"},"memory_standard":{"type":"string","index":"not_analyzed"},"memory_technology":{"type":"string","index":"not_analyzed"},"memory_type":{"type":"string","index":"not_analyzed"},"microphone_polar_pattern":{"type":"string","index":"not_analyzed"},"microphone_transducer_type":{"type":"string","index":"not_analyzed"},"microwave_safe":{"type":"string","index":"not_analyzed"},"minimum_age":{"type":"string","index":"not_analyzed"},"minimum_alarm_distance":{"type":"string","index":"not_analyzed"},"minimum_temperature":{"type":"string","index":"not_analyzed"},"minimum_weight":{"type":"string","index":"not_analyzed"},"mirror_height":{"type":"string","index":"not_analyzed"},"mirror_included":{"type":"string","index":"not_analyzed"},"mirror_surface":{"type":"string","index":"not_analyzed"},"mirror_width":{"type":"string","index":"not_analyzed"},"missed_call_notification":{"type":"string","index":"not_analyzed"},"model_id":{"type":"string","index":"not_analyzed"},"model_number":{"type":"string","index":"not_analyzed"},"model_series":{"type":"string","index":"not_analyzed"},"modulation_technology":{"type":"string","index":"not_analyzed"},"moisture_control":{"type":"string","index":"not_analyzed"},"mop_material":{"type":"string","index":"not_analyzed"},"mop_weight":{"type":"string","index":"not_analyzed"},"motion_activated":{"type":"string","index":"not_analyzed"},"motion_gaming":{"type":"string","index":"not_analyzed"},"motor_overload_protection":{"type":"string","index":"not_analyzed"},"motor_power":{"type":"string","index":"not_analyzed"},"motor_speed":{"type":"string","index":"not_analyzed"},"mount":{"type":"string","index":"not_analyzed"},"mount_features":{"type":"string","index":"not_analyzed"},"mounted":{"type":"string","index":"not_analyzed"},"mounting_features":{"type":"string","index":"not_analyzed"},"mounting_type":{"type":"string","index":"not_analyzed"},"mouse_tray":{"type":"string","index":"not_analyzed"},"mouth_diameter":{"type":"string","index":"not_analyzed"},"mp3_bit_rates":{"type":"string","index":"not_analyzed"},"mrp_currency":{"type":"string","index":"not_analyzed"},"mtbf":{"type":"string","index":"not_analyzed"},"multi-angle_reading":{"type":"string","index":"not_analyzed"},"multi-functions":{"type":"string","index":"not_analyzed"},"multiple_fruit_pitting":{"type":"string","index":"not_analyzed"},"music_sensor":{"type":"string","index":"not_analyzed"},"neck":{"type":"string","index":"not_analyzed"},"net_depth":{"type":"string","index":"not_analyzed"},"net_height":{"type":"string","index":"not_analyzed"},"net_material":{"type":"string","index":"not_analyzed"},"net_weight":{"type":"string","index":"not_analyzed"},"net_width":{"type":"string","index":"not_analyzed"},"network_type":{"type":"string","index":"not_analyzed"},"nib_finish":{"type":"string","index":"not_analyzed"},"night_vision_mode":{"type":"string","index":"not_analyzed"},"noise_cancellation_headphones":{"type":"string","index":"not_analyzed"},"noise_cancellation_mircrophone":{"type":"string","index":"not_analyzed"},"noise_level":{"type":"string","index":"not_analyzed"},"noise_reduction_&_cancellations":{"type":"string","index":"not_analyzed"},"non-absorbent":{"type":"string","index":"not_analyzed"},"non-porous":{"type":"string","index":"not_analyzed"},"non-skid_feet":{"type":"string","index":"not_analyzed"},"non-slip":{"type":"string","index":"not_analyzed"},"non-slip_feet":{"type":"string","index":"not_analyzed"},"non-stick":{"type":"string","index":"not_analyzed"},"non-stick_coating":{"type":"string","index":"not_analyzed"},"non-stick_safe":{"type":"string","index":"not_analyzed"},"non-toxic":{"type":"string","index":"not_analyzed"},"non_stick_surface":{"type":"string","index":"not_analyzed"},"non_toxic":{"type":"string","index":"not_analyzed"},"nose_piece_diameter":{"type":"string","index":"not_analyzed"},"not_covered_in_warranty":{"type":"string","index":"not_analyzed"},"notes_editor":{"type":"string","index":"not_analyzed"},"notification_type":{"type":"string","index":"not_analyzed"},"novelty_feature":{"type":"string","index":"not_analyzed"},"nozzle_type":{"type":"string","index":"not_analyzed"},"number_for_arms":{"type":"string","index":"not_analyzed"},"number_of_absorbers":{"type":"string","index":"not_analyzed"},"number_of_adapters":{"type":"string","index":"not_analyzed"},"number_of_antennas":{"type":"string","index":"not_analyzed"},"number_of_bags":{"type":"string","index":"not_analyzed"},"number_of_bakery_dipping_tools":{"type":"string","index":"not_analyzed"},"number_of_baking_rollers":{"type":"string","index":"not_analyzed"},"number_of_baking_stencils":{"type":"string","index":"not_analyzed"},"number_of_balls":{"type":"string","index":"not_analyzed"},"number_of_batteries":{"type":"string","index":"not_analyzed"},"number_of_bell_pull_ends":{"type":"string","index":"not_analyzed"},"number_of_bells":{"type":"string","index":"not_analyzed"},"number_of_benches":{"type":"string","index":"not_analyzed"},"number_of_blades":{"type":"string","index":"not_analyzed"},"number_of_boards":{"type":"string","index":"not_analyzed"},"number_of_bottles":{"type":"string","index":"not_analyzed"},"number_of_boxes":{"type":"string","index":"not_analyzed"},"number_of_brushes":{"type":"string","index":"not_analyzed"},"number_of_bulb":{"type":"string","index":"not_analyzed"},"number_of_bunks":{"type":"string","index":"not_analyzed"},"number_of_burners":{"type":"string","index":"not_analyzed"},"number_of_bus":{"type":"string","index":"not_analyzed"},"number_of_buttonhole_styles":{"type":"string","index":"not_analyzed"},"number_of_buttons":{"type":"string","index":"not_analyzed"},"number_of_cake_testers":{"type":"string","index":"not_analyzed"},"number_of_candles":{"type":"string","index":"not_analyzed"},"number_of_castor_wheels":{"type":"string","index":"not_analyzed"},"number_of_cavities":{"type":"string","index":"not_analyzed"},"number_of_chairs":{"type":"string","index":"not_analyzed"},"number_of_channels":{"type":"string","index":"not_analyzed"},"number_of_charging_ports":{"type":"string","index":"not_analyzed"},"number_of_chopsticks":{"type":"string","index":"not_analyzed"},"number_of_cocktail_shakers":{"type":"string","index":"not_analyzed"},"number_of_colors":{"type":"string","index":"not_analyzed"},"number_of_compartments":{"type":"string","index":"not_analyzed"},"number_of_connectors":{"type":"string","index":"not_analyzed"},"number_of_containers":{"type":"string","index":"not_analyzed"},"number_of_contents":{"type":"string","index":"not_analyzed"},"number_of_cores":{"type":"string","index":"not_analyzed"},"number_of_crayons":{"type":"string","index":"not_analyzed"},"number_of_cupcake_inserts":{"type":"string","index":"not_analyzed"},"number_of_cups":{"type":"string","index":"not_analyzed"},"number_of_cut-outs":{"type":"string","index":"not_analyzed"},"number_of_cutters":{"type":"string","index":"not_analyzed"},"number_of_decks":{"type":"string","index":"not_analyzed"},"number_of_devices_supported":{"type":"string","index":"not_analyzed"},"number_of_die_plates":{"type":"string","index":"not_analyzed"},"number_of_disks":{"type":"string","index":"not_analyzed"},"number_of_dispensers":{"type":"string","index":"not_analyzed"},"number_of_display_hands":{"type":"string","index":"not_analyzed"},"number_of_donuts":{"type":"string","index":"not_analyzed"},"number_of_doors":{"type":"string","index":"not_analyzed"},"number_of_drawers":{"type":"string","index":"not_analyzed"},"number_of_dumpling_press":{"type":"string","index":"not_analyzed"},"number_of_eggs_boiled":{"type":"string","index":"not_analyzed"},"number_of_ethernet_ports":{"type":"string","index":"not_analyzed"},"number_of_faders":{"type":"string","index":"not_analyzed"},"number_of_feathers":{"type":"string","index":"not_analyzed"},"number_of_finger_guards":{"type":"string","index":"not_analyzed"},"number_of_flashes":{"type":"string","index":"not_analyzed"},"number_of_folds":{"type":"string","index":"not_analyzed"},"number_of_functions":{"type":"string","index":"not_analyzed"},"number_of_funnels":{"type":"string","index":"not_analyzed"},"number_of_glasses":{"type":"string","index":"not_analyzed"},"number_of_hand_muller_grinder":{"type":"string","index":"not_analyzed"},"number_of_hands":{"type":"string","index":"not_analyzed"},"number_of_headers":{"type":"string","index":"not_analyzed"},"number_of_heat_settings":{"type":"string","index":"not_analyzed"},"number_of_holders":{"type":"string","index":"not_analyzed"},"number_of_hooks":{"type":"string","index":"not_analyzed"},"number_of_icing_couplers":{"type":"string","index":"not_analyzed"},"number_of_incense_sticks":{"type":"string","index":"not_analyzed"},"number_of_indicators":{"type":"string","index":"not_analyzed"},"number_of_input_options":{"type":"string","index":"not_analyzed"},"number_of_items":{"type":"string","index":"not_analyzed"},"number_of_jars":{"type":"string","index":"not_analyzed"},"number_of_knobs":{"type":"string","index":"not_analyzed"},"number_of_lan_ports":{"type":"string","index":"not_analyzed"},"number_of_languages":{"type":"string","index":"not_analyzed"},"number_of_layers":{"type":"string","index":"not_analyzed"},"number_of_led_bulbs":{"type":"string","index":"not_analyzed"},"number_of_lights":{"type":"string","index":"not_analyzed"},"number_of_memory_slots":{"type":"string","index":"not_analyzed"},"number_of_nozzles":{"type":"string","index":"not_analyzed"},"number_of_ornaments":{"type":"string","index":"not_analyzed"},"number_of_outlets":{"type":"string","index":"not_analyzed"},"number_of_output_options":{"type":"string","index":"not_analyzed"},"number_of_paint_shades":{"type":"string","index":"not_analyzed"},"number_of_panels":{"type":"string","index":"not_analyzed"},"number_of_party_blowouts":{"type":"string","index":"not_analyzed"},"number_of_people":{"type":"string","index":"not_analyzed"},"number_of_photos":{"type":"string","index":"not_analyzed"},"number_of_pieces":{"type":"string","index":"not_analyzed"},"number_of_pipe_openings":{"type":"string","index":"not_analyzed"},"number_of_plates":{"type":"string","index":"not_analyzed"},"number_of_players":{"type":"string","index":"not_analyzed"},"number_of_pockets":{"type":"string","index":"not_analyzed"},"number_of_ports":{"type":"string","index":"not_analyzed"},"number_of_privacy_codes":{"type":"string","index":"not_analyzed"},"number_of_punch_heads":{"type":"string","index":"not_analyzed"},"number_of_racks":{"type":"string","index":"not_analyzed"},"number_of_rails":{"type":"string","index":"not_analyzed"},"number_of_recliners":{"type":"string","index":"not_analyzed"},"number_of_reclining_positions":{"type":"string","index":"not_analyzed"},"number_of_refrigerator_shelves":{"type":"string","index":"not_analyzed"},"number_of_rings":{"type":"string","index":"not_analyzed"},"number_of_ringtones":{"type":"string","index":"not_analyzed"},"number_of_scoops":{"type":"string","index":"not_analyzed"},"number_of_settings":{"type":"string","index":"not_analyzed"},"number_of_sheets":{"type":"string","index":"not_analyzed"},"number_of_shelves":{"type":"string","index":"not_analyzed"},"number_of_shoe_pairs":{"type":"string","index":"not_analyzed"},"number_of_sketch_pens":{"type":"string","index":"not_analyzed"},"number_of_slices":{"type":"string","index":"not_analyzed"},"number_of_slots":{"type":"string","index":"not_analyzed"},"number_of_sockets":{"type":"string","index":"not_analyzed"},"number_of_soundcards":{"type":"string","index":"not_analyzed"},"number_of_speakers":{"type":"string","index":"not_analyzed"},"number_of_speed_settings":{"type":"string","index":"not_analyzed"},"number_of_speeds":{"type":"string","index":"not_analyzed"},"number_of_stemware_supported":{"type":"string","index":"not_analyzed"},"number_of_stencils":{"type":"string","index":"not_analyzed"},"number_of_stitches":{"type":"string","index":"not_analyzed"},"number_of_stones":{"type":"string","index":"not_analyzed"},"number_of_tables":{"type":"string","index":"not_analyzed"},"number_of_threads":{"type":"string","index":"not_analyzed"},"number_of_tiers":{"type":"string","index":"not_analyzed"},"number_of_tools":{"type":"string","index":"not_analyzed"},"number_of_trim_lines":{"type":"string","index":"not_analyzed"},"number_of_tubes":{"type":"string","index":"not_analyzed"},"number_of_usb_ports":{"type":"string","index":"not_analyzed"},"number_of_wan_ports":{"type":"string","index":"not_analyzed"},"number_of_wash_programs":{"type":"string","index":"not_analyzed"},"number_of_wheels":{"type":"string","index":"not_analyzed"},"number_of_zippers":{"type":"string","index":"not_analyzed"},"nvidia_graphic":{"type":"string","index":"not_analyzed"},"objective_diameter":{"type":"string","index":"not_analyzed"},"occasion":{"type":"string","index":"not_analyzed"},"odorless":{"type":"string","index":"not_analyzed"},"on-board_effects":{"type":"string","index":"not_analyzed"},"on_board_(size_wise)_for_airline":{"type":"string","index":"not_analyzed"},"one_button":{"type":"string","index":"not_analyzed"},"online_platform":{"type":"string","index":"not_analyzed"},"open_depth":{"type":"string","index":"not_analyzed"},"opening_mechanism":{"type":"string","index":"not_analyzed"},"operating__humidity":{"type":"string","index":"not_analyzed"},"operating_current":{"type":"string","index":"not_analyzed"},"operating_humidity_range":{"type":"string","index":"not_analyzed"},"operating_modes":{"type":"string","index":"not_analyzed"},"operating_system":{"type":"string","index":"not_analyzed"},"operating_temperature":{"type":"string","index":"not_analyzed"},"operating_time":{"type":"string","index":"not_analyzed"},"operating_voltage":{"type":"string","index":"not_analyzed"},"operation":{"type":"string","index":"not_analyzed"},"operation_temperature":{"type":"string","index":"not_analyzed"},"operation_type":{"type":"string","index":"not_analyzed"},"operational_modes":{"type":"string","index":"not_analyzed"},"optical_drive":{"type":"string","index":"not_analyzed"},"optical_scanning_resolution":{"type":"string","index":"not_analyzed"},"optical_sensor_resolution_(in_megapixel)":{"type":"string","index":"not_analyzed"},"optical_zoom":{"type":"string","index":"not_analyzed"},"organic":{"type":"string","index":"not_analyzed"},"organiser_email":{"type":"string","index":"not_analyzed"},"orientation":{"type":"string","index":"not_analyzed"},"origin_of_manufacture":{"type":"string","index":"not_analyzed"},"orthopaedic_support":{"type":"string","index":"not_analyzed"},"os_supported":{"type":"string","index":"not_analyzed"},"osd_languages_supported":{"type":"string","index":"not_analyzed"},"otg_safe":{"type":"string","index":"not_analyzed"},"other_air_flow_features":{"type":"string","index":"not_analyzed"},"other_audio_features":{"type":"string","index":"not_analyzed"},"other_blades":{"type":"string","index":"not_analyzed"},"other_body_and_design_features":{"type":"string","index":"not_analyzed"},"other_body_features":{"type":"string","index":"not_analyzed"},"other_build_features":{"type":"string","index":"not_analyzed"},"other_cable_and_connector_features":{"type":"string","index":"not_analyzed"},"other_call_features":{"type":"string","index":"not_analyzed"},"other_camera_features":{"type":"string","index":"not_analyzed"},"other_comfort_features":{"type":"string","index":"not_analyzed"},"other_conductor_features":{"type":"string","index":"not_analyzed"},"other_connectivity_features":{"type":"string","index":"not_analyzed"},"other_convenience_features":{"type":"string","index":"not_analyzed"},"other_cooking_features":{"type":"string","index":"not_analyzed"},"other_crayon_features":{"type":"string","index":"not_analyzed"},"other_dimensions":{"type":"string","index":"not_analyzed"},"other_display_features":{"type":"string","index":"not_analyzed"},"other_door_features":{"type":"string","index":"not_analyzed"},"other_features":{"type":"string","index":"not_analyzed"},"other_fitness_features":{"type":"string","index":"not_analyzed"},"other_graphics_features":{"type":"string","index":"not_analyzed"},"other_included_services":{"type":"string","index":"not_analyzed"},"other_keypad_features":{"type":"string","index":"not_analyzed"},"other_marker_features":{"type":"string","index":"not_analyzed"},"other_materials":{"type":"string","index":"not_analyzed"},"other_menu_features":{"type":"string","index":"not_analyzed"},"other_microphone_capsule_features":{"type":"string","index":"not_analyzed"},"other_mosquito_net_features":{"type":"string","index":"not_analyzed"},"other_paint_features":{"type":"string","index":"not_analyzed"},"other_pencil_features":{"type":"string","index":"not_analyzed"},"other_performance_features":{"type":"string","index":"not_analyzed"},"other_power_features":{"type":"string","index":"not_analyzed"},"other_protective_features":{"type":"string","index":"not_analyzed"},"other_rack_features":{"type":"string","index":"not_analyzed"},"other_requirements":{"type":"string","index":"not_analyzed"},"other_safety_and_convenience_features":{"type":"string","index":"not_analyzed"},"other_security_features":{"type":"string","index":"not_analyzed"},"other_sensor_features":{"type":"string","index":"not_analyzed"},"other_settings_&_indicators":{"type":"string","index":"not_analyzed"},"other_sketch_pen_features":{"type":"string","index":"not_analyzed"},"other_sports_and_action_camera_features":{"type":"string","index":"not_analyzed"},"other_video_features":{"type":"string","index":"not_analyzed"},"other_viewfinder_features":{"type":"string","index":"not_analyzed"},"others":{"type":"string","index":"not_analyzed"},"ottoman_included":{"type":"string","index":"not_analyzed"},"outdoor":{"type":"string","index":"not_analyzed"},"outer_diameter":{"type":"string","index":"not_analyzed"},"outer_fabric":{"type":"string","index":"not_analyzed"},"outer_material":{"type":"string","index":"not_analyzed"},"output_frequency":{"type":"string","index":"not_analyzed"},"output_power":{"type":"string","index":"not_analyzed"},"output_power_wattage":{"type":"string","index":"not_analyzed"},"output_tray_capacity":{"type":"string","index":"not_analyzed"},"output_tray_type":{"type":"string","index":"not_analyzed"},"output_voltage":{"type":"string","index":"not_analyzed"},"output_waveform":{"type":"string","index":"not_analyzed"},"oven_safe":{"type":"string","index":"not_analyzed"},"over_volt_protection":{"type":"string","index":"not_analyzed"},"overall_length":{"type":"string","index":"not_analyzed"},"overheat_protection":{"type":"string","index":"not_analyzed"},"ozone_output":{"type":"string","index":"not_analyzed"},"pack_of":{"type":"string","index":"not_analyzed"},"packaging":{"type":"string","index":"not_analyzed"},"paint_medium":{"type":"string","index":"not_analyzed"},"pan_type":{"type":"string","index":"not_analyzed"},"panel_direction":{"type":"string","index":"not_analyzed"},"panel_type":{"type":"string","index":"not_analyzed"},"paper_capacity":{"type":"string","index":"not_analyzed"},"paper_depth":{"type":"string","index":"not_analyzed"},"paper_finish":{"type":"string","index":"not_analyzed"},"paper_roll_diameter":{"type":"string","index":"not_analyzed"},"paper_specification":{"type":"string","index":"not_analyzed"},"paper_type":{"type":"string","index":"not_analyzed"},"part":{"type":"string","index":"not_analyzed"},"part_number":{"type":"string","index":"not_analyzed"},"parts_within":{"type":"string","index":"not_analyzed"},"pattern":{"type":"string","index":"not_analyzed"},"pattern_repeat":{"type":"string","index":"not_analyzed"},"pc_audio_in":{"type":"string","index":"not_analyzed"},"pci_slots":{"type":"string","index":"not_analyzed"},"pedal":{"type":"string","index":"not_analyzed"},"pedal_included":{"type":"string","index":"not_analyzed"},"peeler_type":{"type":"string","index":"not_analyzed"},"pegi__rating":{"type":"string","index":"not_analyzed"},"percolator_type":{"type":"string","index":"not_analyzed"},"performance_mode_types":{"type":"string","index":"not_analyzed"},"phase":{"type":"string","index":"not_analyzed"},"phonebook_entries":{"type":"string","index":"not_analyzed"},"picture_angle":{"type":"string","index":"not_analyzed"},"pillow_cover_length":{"type":"string","index":"not_analyzed"},"pillow_cover_width":{"type":"string","index":"not_analyzed"},"pillow_design":{"type":"string","index":"not_analyzed"},"pillow_provided":{"type":"string","index":"not_analyzed"},"pillow_top":{"type":"string","index":"not_analyzed"},"pins":{"type":"string","index":"not_analyzed"},"pixel_pitch":{"type":"string","index":"not_analyzed"},"place_of_use":{"type":"string","index":"not_analyzed"},"placement":{"type":"string","index":"not_analyzed"},"plate_diameter":{"type":"string","index":"not_analyzed"},"plate_material":{"type":"string","index":"not_analyzed"},"plate_size":{"type":"string","index":"not_analyzed"},"plate_type":{"type":"string","index":"not_analyzed"},"platform":{"type":"string","index":"not_analyzed"},"platform_size":{"type":"string","index":"not_analyzed"},"platter_height":{"type":"string","index":"not_analyzed"},"platter_width":{"type":"string","index":"not_analyzed"},"play_time":{"type":"string","index":"not_analyzed"},"playback_modes":{"type":"string","index":"not_analyzed"},"pocket_included":{"type":"string","index":"not_analyzed"},"pockets":{"type":"string","index":"not_analyzed"},"polish_dispenser_capacity":{"type":"string","index":"not_analyzed"},"port_type":{"type":"string","index":"not_analyzed"},"portable":{"type":"string","index":"not_analyzed"},"ports_available":{"type":"string","index":"not_analyzed"},"pot_material":{"type":"string","index":"not_analyzed"},"pourer_provided":{"type":"string","index":"not_analyzed"},"power_adapter":{"type":"string","index":"not_analyzed"},"power_adapter_input":{"type":"string","index":"not_analyzed"},"power_consumption":{"type":"string","index":"not_analyzed"},"power_consumption_-_cooling":{"type":"string","index":"not_analyzed"},"power_consumption_-_grill":{"type":"string","index":"not_analyzed"},"power_cord_length":{"type":"string","index":"not_analyzed"},"power_input":{"type":"string","index":"not_analyzed"},"power_levels":{"type":"string","index":"not_analyzed"},"power_light_indicator":{"type":"string","index":"not_analyzed"},"power_output":{"type":"string","index":"not_analyzed"},"power_over_ethernet":{"type":"string","index":"not_analyzed"},"power_requirement":{"type":"string","index":"not_analyzed"},"power_saving_mode":{"type":"string","index":"not_analyzed"},"power_source":{"type":"string","index":"not_analyzed"},"power_supply":{"type":"string","index":"not_analyzed"},"powered_by":{"type":"string","index":"not_analyzed"},"pre-assembled":{"type":"string","index":"not_analyzed"},"pre-heating_time":{"type":"string","index":"not_analyzed"},"pre-installed_browser":{"type":"string","index":"not_analyzed"},"precious_stones_present":{"type":"string","index":"not_analyzed"},"presentation":{"type":"string","index":"not_analyzed"},"press_type":{"type":"string","index":"not_analyzed"},"pressing_style":{"type":"string","index":"not_analyzed"},"primary_camera":{"type":"string","index":"not_analyzed"},"primary_color":{"type":"string","index":"not_analyzed"},"primary_material":{"type":"string","index":"not_analyzed"},"primary_material_subtype":{"type":"string","index":"not_analyzed"},"primary_product_size":{"type":"string","index":"not_analyzed"},"print_contrast":{"type":"string","index":"not_analyzed"},"print_speed_mono":{"type":"string","index":"not_analyzed"},"print_type":{"type":"string","index":"not_analyzed"},"printed":{"type":"string","index":"not_analyzed"},"printing_method":{"type":"string","index":"not_analyzed"},"printing_output":{"type":"string","index":"not_analyzed"},"processing_bowl":{"type":"string","index":"not_analyzed"},"processor":{"type":"string","index":"not_analyzed"},"processor_name":{"type":"string","index":"not_analyzed"},"processor_speed":{"type":"string","index":"not_analyzed"},"processor_type":{"type":"string","index":"not_analyzed"},"product_depth":{"type":"string","index":"not_analyzed"},"product_height":{"type":"string","index":"not_analyzed"},"product_type":{"type":"string","index":"not_analyzed"},"product_weight":{"type":"string","index":"not_analyzed"},"product_width":{"type":"string","index":"not_analyzed"},"projection_distance":{"type":"string","index":"not_analyzed"},"projection_screen_size":{"type":"string","index":"not_analyzed"},"projector_included":{"type":"string","index":"not_analyzed"},"protection":{"type":"string","index":"not_analyzed"},"protection_against":{"type":"string","index":"not_analyzed"},"ps\/2":{"type":"string","index":"not_analyzed"},"publisher":{"type":"string","index":"not_analyzed"},"punching_capacity":{"type":"string","index":"not_analyzed"},"purification_method":{"type":"string","index":"not_analyzed"},"purpose":{"type":"string","index":"not_analyzed"},"quantity":{"type":"string","index":"not_analyzed"},"racks_&_trays_available":{"type":"string","index":"not_analyzed"},"radio":{"type":"string","index":"not_analyzed"},"radio_tuner":{"type":"string","index":"not_analyzed"},"radio_tuner_support":{"type":"string","index":"not_analyzed"},"radio_type":{"type":"string","index":"not_analyzed"},"raid_configurations":{"type":"string","index":"not_analyzed"},"raid_controller":{"type":"string","index":"not_analyzed"},"railing_included":{"type":"string","index":"not_analyzed"},"rainfly_included":{"type":"string","index":"not_analyzed"},"ram":{"type":"string","index":"not_analyzed"},"range":{"type":"string","index":"not_analyzed"},"rated_life":{"type":"string","index":"not_analyzed"},"rated_pressure":{"type":"string","index":"not_analyzed"},"rear_camera":{"type":"string","index":"not_analyzed"},"rear_ports":{"type":"string","index":"not_analyzed"},"receiver_sensitivity":{"type":"string","index":"not_analyzed"},"recessed_area":{"type":"string","index":"not_analyzed"},"recharge_time":{"type":"string","index":"not_analyzed"},"rechargeable":{"type":"string","index":"not_analyzed"},"rechargeable_battery":{"type":"string","index":"not_analyzed"},"recycling_time":{"type":"string","index":"not_analyzed"},"redial_memory":{"type":"string","index":"not_analyzed"},"refillable_bean":{"type":"string","index":"not_analyzed"},"refresh_rate":{"type":"string","index":"not_analyzed"},"refrigerator_type":{"type":"string","index":"not_analyzed"},"region":{"type":"string","index":"not_analyzed"},"reinforced_edges":{"type":"string","index":"not_analyzed"},"remote":{"type":"string","index":"not_analyzed"},"remote_control":{"type":"string","index":"not_analyzed"},"removable":{"type":"string","index":"not_analyzed"},"removable_base_tray":{"type":"string","index":"not_analyzed"},"removable_filter":{"type":"string","index":"not_analyzed"},"removable_gasket":{"type":"string","index":"not_analyzed"},"removable_inner_potty":{"type":"string","index":"not_analyzed"},"removable_insole":{"type":"string","index":"not_analyzed"},"removable_rack":{"type":"string","index":"not_analyzed"},"replaceable_head":{"type":"string","index":"not_analyzed"},"replacement_battery":{"type":"string","index":"not_analyzed"},"residue_free_removal":{"type":"string","index":"not_analyzed"},"resolution":{"type":"string","index":"not_analyzed"},"response_time":{"type":"string","index":"not_analyzed"},"reusable":{"type":"string","index":"not_analyzed"},"reversible":{"type":"string","index":"not_analyzed"},"reversible_mattress":{"type":"string","index":"not_analyzed"},"rf_capable":{"type":"string","index":"not_analyzed"},"rf_connectivity_input":{"type":"string","index":"not_analyzed"},"right_angle_plug":{"type":"string","index":"not_analyzed"},"ring_diameter":{"type":"string","index":"not_analyzed"},"robot_aquarium_animal":{"type":"string","index":"not_analyzed"},"robotic":{"type":"string","index":"not_analyzed"},"rocker":{"type":"string","index":"not_analyzed"},"rod_":{"type":"string","index":"not_analyzed"},"rolling_pin_material":{"type":"string","index":"not_analyzed"},"rolling_pin_type":{"type":"string","index":"not_analyzed"},"rollout_bed":{"type":"string","index":"not_analyzed"},"rom":{"type":"string","index":"not_analyzed"},"rotating_lens_angle":{"type":"string","index":"not_analyzed"},"rotating_speed":{"type":"string","index":"not_analyzed"},"rubber_gasket_included":{"type":"string","index":"not_analyzed"},"runner_ends":{"type":"string","index":"not_analyzed"},"runtime":{"type":"string","index":"not_analyzed"},"rust_free":{"type":"string","index":"not_analyzed"},"rust_proof":{"type":"string","index":"not_analyzed"},"rust_resistant":{"type":"string","index":"not_analyzed"},"safety_door_switch":{"type":"string","index":"not_analyzed"},"safety_features":{"type":"string","index":"not_analyzed"},"safety_locking":{"type":"string","index":"not_analyzed"},"sales_package":{"type":"string","index":"not_analyzed"},"scan_method":{"type":"string","index":"not_analyzed"},"scan_rate":{"type":"string","index":"not_analyzed"},"scanner_type":{"type":"string","index":"not_analyzed"},"scented":{"type":"string","index":"not_analyzed"},"scratch_resistant":{"type":"string","index":"not_analyzed"},"screen_size":{"type":"string","index":"not_analyzed"},"screen_type":{"type":"string","index":"not_analyzed"},"seat_depth":{"type":"string","index":"not_analyzed"},"seat_handles":{"type":"string","index":"not_analyzed"},"seat_height":{"type":"string","index":"not_analyzed"},"seat_lock_included":{"type":"string","index":"not_analyzed"},"seat_width":{"type":"string","index":"not_analyzed"},"seating_capacity":{"type":"string","index":"not_analyzed"},"seating_provided":{"type":"string","index":"not_analyzed"},"seating_type":{"type":"string","index":"not_analyzed"},"secondary_camera":{"type":"string","index":"not_analyzed"},"secondary_material":{"type":"string","index":"not_analyzed"},"secondary_material_subtype":{"type":"string","index":"not_analyzed"},"security":{"type":"string","index":"not_analyzed"},"seller":{"type":"string","index":"not_analyzed"},"selling_price_currency":{"type":"string","index":"not_analyzed"},"sensitivity":{"type":"string","index":"not_analyzed"},"sensor_size":{"type":"string","index":"not_analyzed"},"sensor_type":{"type":"string","index":"not_analyzed"},"sensors":{"type":"string","index":"not_analyzed"},"series":{"type":"string","index":"not_analyzed"},"serrated":{"type":"string","index":"not_analyzed"},"service_type":{"type":"string","index":"not_analyzed"},"set_contents":{"type":"string","index":"not_analyzed"},"set_of":{"type":"string","index":"not_analyzed"},"sewing_speed":{"type":"string","index":"not_analyzed"},"shade":{"type":"string","index":"not_analyzed"},"shaft_material":{"type":"string","index":"not_analyzed"},"shaft_shape":{"type":"string","index":"not_analyzed"},"shaft_type":{"type":"string","index":"not_analyzed"},"shankh_type":{"type":"string","index":"not_analyzed"},"shape":{"type":"string","index":"not_analyzed"},"shelf_material":{"type":"string","index":"not_analyzed"},"shelf_type":{"type":"string","index":"not_analyzed"},"shipping_charges_currency":{"type":"string","index":"not_analyzed"},"shock_resistant":{"type":"string","index":"not_analyzed"},"shooting_modes":{"type":"string","index":"not_analyzed"},"shoulder_strap":{"type":"string","index":"not_analyzed"},"side_table_depth":{"type":"string","index":"not_analyzed"},"side_table_height":{"type":"string","index":"not_analyzed"},"side_table_weight":{"type":"string","index":"not_analyzed"},"side_table_width":{"type":"string","index":"not_analyzed"},"siderest_included":{"type":"string","index":"not_analyzed"},"signal_type":{"type":"string","index":"not_analyzed"},"silent_mode":{"type":"string","index":"not_analyzed"},"sim":{"type":"string","index":"not_analyzed"},"sim_size":{"type":"string","index":"not_analyzed"},"sim_type":{"type":"string","index":"not_analyzed"},"size_unit":{"type":"string","index":"not_analyzed"},"slanted_back":{"type":"string","index":"not_analyzed"},"sleep_mode":{"type":"string","index":"not_analyzed"},"sleeve":{"type":"string","index":"not_analyzed"},"sleeves":{"type":"string","index":"not_analyzed"},"slice_capacity":{"type":"string","index":"not_analyzed"},"slicer_type":{"type":"string","index":"not_analyzed"},"slicing_blade":{"type":"string","index":"not_analyzed"},"slide_bowl_material":{"type":"string","index":"not_analyzed"},"slide_included":{"type":"string","index":"not_analyzed"},"slip_resistant":{"type":"string","index":"not_analyzed"},"slot_required":{"type":"string","index":"not_analyzed"},"slot_shape":{"type":"string","index":"not_analyzed"},"slow_motion":{"type":"string","index":"not_analyzed"},"smallest_table_depth":{"type":"string","index":"not_analyzed"},"smallest_table_height":{"type":"string","index":"not_analyzed"},"smallest_table_width":{"type":"string","index":"not_analyzed"},"smart_tv":{"type":"string","index":"not_analyzed"},"socket_material":{"type":"string","index":"not_analyzed"},"socket_type":{"type":"string","index":"not_analyzed"},"soft_close":{"type":"string","index":"not_analyzed"},"software_included":{"type":"string","index":"not_analyzed"},"software_requirement":{"type":"string","index":"not_analyzed"},"solar_power_compatible":{"type":"string","index":"not_analyzed"},"sole_cleaner_present":{"type":"string","index":"not_analyzed"},"sole_material":{"type":"string","index":"not_analyzed"},"soleplate_type":{"type":"string","index":"not_analyzed"},"sound":{"type":"string","index":"not_analyzed"},"sound_range":{"type":"string","index":"not_analyzed"},"sound_support":{"type":"string","index":"not_analyzed"},"sound_system":{"type":"string","index":"not_analyzed"},"soundcard_capacity":{"type":"string","index":"not_analyzed"},"space_for":{"type":"string","index":"not_analyzed"},"spatula":{"type":"string","index":"not_analyzed"},"speaker_output_rms":{"type":"string","index":"not_analyzed"},"speaker_phone":{"type":"string","index":"not_analyzed"},"speakers":{"type":"string","index":"not_analyzed"},"special_price_currency":{"type":"string","index":"not_analyzed"},"specified_voltage":{"type":"string","index":"not_analyzed"},"speed":{"type":"string","index":"not_analyzed"},"speed_dialing":{"type":"string","index":"not_analyzed"},"spill_tray_included":{"type":"string","index":"not_analyzed"},"sports_type":{"type":"string","index":"not_analyzed"},"spout_present":{"type":"string","index":"not_analyzed"},"spray_interval_settings":{"type":"string","index":"not_analyzed"},"spreader_bar":{"type":"string","index":"not_analyzed"},"spreader_bar_length":{"type":"string","index":"not_analyzed"},"spreader_bar_material":{"type":"string","index":"not_analyzed"},"spreadsheet":{"type":"string","index":"not_analyzed"},"spring-loaded_plunger":{"type":"string","index":"not_analyzed"},"stabilizer_required":{"type":"string","index":"not_analyzed"},"stackable":{"type":"string","index":"not_analyzed"},"stain_resistant":{"type":"string","index":"not_analyzed"},"stand":{"type":"string","index":"not_analyzed"},"standard_ieee":{"type":"string","index":"not_analyzed"},"standby_current":{"type":"string","index":"not_analyzed"},"standby_time":{"type":"string","index":"not_analyzed"},"star_rating":{"type":"string","index":"not_analyzed"},"stencil":{"type":"string","index":"not_analyzed"},"step_count":{"type":"string","index":"not_analyzed"},"stool_height":{"type":"string","index":"not_analyzed"},"stool_included":{"type":"string","index":"not_analyzed"},"stool_width":{"type":"string","index":"not_analyzed"},"stopper_present":{"type":"string","index":"not_analyzed"},"stopper_provided":{"type":"string","index":"not_analyzed"},"storage":{"type":"string","index":"not_analyzed"},"storage_capacity":{"type":"string","index":"not_analyzed"},"storage_features":{"type":"string","index":"not_analyzed"},"storage_humidity":{"type":"string","index":"not_analyzed"},"storage_included":{"type":"string","index":"not_analyzed"},"storage_temprature_range":{"type":"string","index":"not_analyzed"},"strainer_type":{"type":"string","index":"not_analyzed"},"strap_color":{"type":"string","index":"not_analyzed"},"strap_material":{"type":"string","index":"not_analyzed"},"strap_type":{"type":"string","index":"not_analyzed"},"study_desk_available":{"type":"string","index":"not_analyzed"},"sub-type":{"type":"string","index":"not_analyzed"},"subjects":{"type":"string","index":"not_analyzed"},"subscription_validity":{"type":"string","index":"not_analyzed"},"subwoofer":{"type":"string","index":"not_analyzed"},"subwoofer_(width_x_height_x_depth)":{"type":"string","index":"not_analyzed"},"subwoofer_weight":{"type":"string","index":"not_analyzed"},"suitable_for":{"type":"string","index":"not_analyzed"},"suitable_photo_size":{"type":"string","index":"not_analyzed"},"suitable_weather":{"type":"string","index":"not_analyzed"},"sulphur_free":{"type":"string","index":"not_analyzed"},"support_mechanism":{"type":"string","index":"not_analyzed"},"support_stand_included":{"type":"string","index":"not_analyzed"},"supported_aspect_ratio":{"type":"string","index":"not_analyzed"},"supported_interfaces":{"type":"string","index":"not_analyzed"},"supported_languages":{"type":"string","index":"not_analyzed"},"supported_networks":{"type":"string","index":"not_analyzed"},"supported_protocols":{"type":"string","index":"not_analyzed"},"supported_standards":{"type":"string","index":"not_analyzed"},"supports_gaming_consoles":{"type":"string","index":"not_analyzed"},"surface_features":{"type":"string","index":"not_analyzed"},"sweat_absorbent":{"type":"string","index":"not_analyzed"},"switch_type":{"type":"string","index":"not_analyzed"},"swivel":{"type":"string","index":"not_analyzed"},"swivel_cord":{"type":"string","index":"not_analyzed"},"system_memory":{"type":"string","index":"not_analyzed"},"system_requirement":{"type":"string","index":"not_analyzed"},"table_depth":{"type":"string","index":"not_analyzed"},"table_height":{"type":"string","index":"not_analyzed"},"table_shape":{"type":"string","index":"not_analyzed"},"table_weight":{"type":"string","index":"not_analyzed"},"table_width":{"type":"string","index":"not_analyzed"},"tabletop_thickness":{"type":"string","index":"not_analyzed"},"talk_time":{"type":"string","index":"not_analyzed"},"talktime":{"type":"string","index":"not_analyzed"},"tapered":{"type":"string","index":"not_analyzed"},"tare_function":{"type":"string","index":"not_analyzed"},"target_distance":{"type":"string","index":"not_analyzed"},"technician_visit_details":{"type":"string","index":"not_analyzed"},"technology":{"type":"string","index":"not_analyzed"},"technology_used":{"type":"string","index":"not_analyzed"},"telephone_line_support":{"type":"string","index":"not_analyzed"},"temperature":{"type":"string","index":"not_analyzed"},"temperature_control_range":{"type":"string","index":"not_analyzed"},"temperature_controller":{"type":"string","index":"not_analyzed"},"temperature_range":{"type":"string","index":"not_analyzed"},"temperature_rating":{"type":"string","index":"not_analyzed"},"tent_included":{"type":"string","index":"not_analyzed"},"texture":{"type":"string","index":"not_analyzed"},"the_handle_length":{"type":"string","index":"not_analyzed"},"theme":{"type":"string","index":"not_analyzed"},"thermal_cutoff":{"type":"string","index":"not_analyzed"},"thermo_shield_protection":{"type":"string","index":"not_analyzed"},"thermostat":{"type":"string","index":"not_analyzed"},"thickness":{"type":"string","index":"not_analyzed"},"thread_count":{"type":"string","index":"not_analyzed"},"three_seater_depth":{"type":"string","index":"not_analyzed"},"three_seater_height":{"type":"string","index":"not_analyzed"},"three_seater_weight":{"type":"string","index":"not_analyzed"},"three_seater_width":{"type":"string","index":"not_analyzed"},"thumb_guard":{"type":"string","index":"not_analyzed"},"tilt_angle":{"type":"string","index":"not_analyzed"},"time_taken":{"type":"string","index":"not_analyzed"},"timer":{"type":"string","index":"not_analyzed"},"timer_present":{"type":"string","index":"not_analyzed"},"tint":{"type":"string","index":"not_analyzed"},"tip-over_switch":{"type":"string","index":"not_analyzed"},"tip_design":{"type":"string","index":"not_analyzed"},"tip_shape":{"type":"string","index":"not_analyzed"},"tog_rating":{"type":"string","index":"not_analyzed"},"tong_type":{"type":"string","index":"not_analyzed"},"tools":{"type":"string","index":"not_analyzed"},"top_closure":{"type":"string","index":"not_analyzed"},"top_compartment_dimensions":{"type":"string","index":"not_analyzed"},"top_rail_included":{"type":"string","index":"not_analyzed"},"total_jars":{"type":"string","index":"not_analyzed"},"total_length":{"type":"string","index":"not_analyzed"},"touch_screen":{"type":"string","index":"not_analyzed"},"touch_sensor":{"type":"string","index":"not_analyzed"},"toy_bar":{"type":"string","index":"not_analyzed"},"transfer_time":{"type":"string","index":"not_analyzed"},"transmit_power":{"type":"string","index":"not_analyzed"},"transparency":{"type":"string","index":"not_analyzed"},"transparent_body":{"type":"string","index":"not_analyzed"},"tray_top_included":{"type":"string","index":"not_analyzed"},"tray_type":{"type":"string","index":"not_analyzed"},"tread_count":{"type":"string","index":"not_analyzed"},"treatment_form":{"type":"string","index":"not_analyzed"},"treatment_type":{"type":"string","index":"not_analyzed"},"tree_shape":{"type":"string","index":"not_analyzed"},"tree_type":{"type":"string","index":"not_analyzed"},"trivet_material":{"type":"string","index":"not_analyzed"},"trolley":{"type":"string","index":"not_analyzed"},"tub_material":{"type":"string","index":"not_analyzed"},"tumble_speed":{"type":"string","index":"not_analyzed"},"tuner":{"type":"string","index":"not_analyzed"},"turbo_boost":{"type":"string","index":"not_analyzed"},"turntable":{"type":"string","index":"not_analyzed"},"turntable_diameter":{"type":"string","index":"not_analyzed"},"tweeter_support":{"type":"string","index":"not_analyzed"},"two_seater_depth":{"type":"string","index":"not_analyzed"},"two_seater_height":{"type":"string","index":"not_analyzed"},"two_seater_weight":{"type":"string","index":"not_analyzed"},"two_seater_width":{"type":"string","index":"not_analyzed"},"type":{"type":"string","index":"not_analyzed"},"type_of_blade":{"type":"string","index":"not_analyzed"},"type_of_feeder":{"type":"string","index":"not_analyzed"},"type_of_headset":{"type":"string","index":"not_analyzed"},"type_of_seed":{"type":"string","index":"not_analyzed"},"type_of_settings":{"type":"string","index":"not_analyzed"},"type_of_tools":{"type":"string","index":"not_analyzed"},"types_of_devices_controlled":{"type":"string","index":"not_analyzed"},"umbrella_hole":{"type":"string","index":"not_analyzed"},"umbrella_included":{"type":"string","index":"not_analyzed"},"under_volt_protection":{"type":"string","index":"not_analyzed"},"uninstallation_details":{"type":"string","index":"not_analyzed"},"units_of_measurement":{"type":"string","index":"not_analyzed"},"universal_voltage":{"type":"string","index":"not_analyzed"},"upgradeable_memory":{"type":"string","index":"not_analyzed"},"upholstered":{"type":"string","index":"not_analyzed"},"upholstery_color":{"type":"string","index":"not_analyzed"},"upholstery_included":{"type":"string","index":"not_analyzed"},"upholstery_type":{"type":"string","index":"not_analyzed"},"usage":{"type":"string","index":"not_analyzed"},"usage_instructions":{"type":"string","index":"not_analyzed"},"usb":{"type":"string","index":"not_analyzed"},"usb_cable":{"type":"string","index":"not_analyzed"},"usb_charging_port":{"type":"string","index":"not_analyzed"},"usb_connectivity":{"type":"string","index":"not_analyzed"},"usb_connector":{"type":"string","index":"not_analyzed"},"usb_port":{"type":"string","index":"not_analyzed"},"usb_support":{"type":"string","index":"not_analyzed"},"use_time":{"type":"string","index":"not_analyzed"},"used_for":{"type":"string","index":"not_analyzed"},"utensils_held":{"type":"string","index":"not_analyzed"},"utensils_safe":{"type":"string","index":"not_analyzed"},"uv_lamp":{"type":"string","index":"not_analyzed"},"valance_included":{"type":"string","index":"not_analyzed"},"variable_thickness_control":{"type":"string","index":"not_analyzed"},"variant":{"type":"string","index":"not_analyzed"},"vase_included":{"type":"string","index":"not_analyzed"},"version":{"type":"string","index":"not_analyzed"},"vertical_viewing_angle":{"type":"string","index":"not_analyzed"},"vga":{"type":"string","index":"not_analyzed"},"vga\/d_sub_ports":{"type":"string","index":"not_analyzed"},"video_decoding_formats":{"type":"string","index":"not_analyzed"},"video_encoding":{"type":"string","index":"not_analyzed"},"video_enhancement":{"type":"string","index":"not_analyzed"},"video_format":{"type":"string","index":"not_analyzed"},"video_formats_supported":{"type":"string","index":"not_analyzed"},"video_out_(composite)":{"type":"string","index":"not_analyzed"},"video_output_resolution":{"type":"string","index":"not_analyzed"},"video_playback_formats":{"type":"string","index":"not_analyzed"},"video_playback_time":{"type":"string","index":"not_analyzed"},"video_player_type":{"type":"string","index":"not_analyzed"},"video_resolution":{"type":"string","index":"not_analyzed"},"video_sensor_resolution":{"type":"string","index":"not_analyzed"},"view_angle":{"type":"string","index":"not_analyzed"},"viewfinder_type":{"type":"string","index":"not_analyzed"},"viewing_area":{"type":"string","index":"not_analyzed"},"virtualisation":{"type":"string","index":"not_analyzed"},"vlan_support":{"type":"string","index":"not_analyzed"},"voice_call":{"type":"string","index":"not_analyzed"},"voice_operated_recording_(vor)":{"type":"string","index":"not_analyzed"},"voltage":{"type":"string","index":"not_analyzed"},"voltage_required":{"type":"string","index":"not_analyzed"},"volume":{"type":"string","index":"not_analyzed"},"volume_control_indicator":{"type":"string","index":"not_analyzed"},"volumetric_weight":{"type":"string","index":"not_analyzed"},"vox_support":{"type":"string","index":"not_analyzed"},"vpn":{"type":"string","index":"not_analyzed"},"waist":{"type":"string","index":"not_analyzed"},"waist_band":{"type":"string","index":"not_analyzed"},"wall_mount":{"type":"string","index":"not_analyzed"},"wall_mountable_satellites":{"type":"string","index":"not_analyzed"},"wall_mounting":{"type":"string","index":"not_analyzed"},"wall_thickness":{"type":"string","index":"not_analyzed"},"wan":{"type":"string","index":"not_analyzed"},"wardrobe_depth":{"type":"string","index":"not_analyzed"},"wardrobe_height":{"type":"string","index":"not_analyzed"},"wardrobe_weight":{"type":"string","index":"not_analyzed"},"wardrobe_width":{"type":"string","index":"not_analyzed"},"warranty":{"type":"string","index":"not_analyzed"},"warranty_service_type":{"type":"string","index":"not_analyzed"},"warranty_summary":{"type":"string","index":"not_analyzed"},"warranty_type":{"type":"string","index":"not_analyzed"},"wash_care_instructions":{"type":"string","index":"not_analyzed"},"wash_program_types":{"type":"string","index":"not_analyzed"},"washable":{"type":"string","index":"not_analyzed"},"washing_capacity":{"type":"string","index":"not_analyzed"},"washing_instructions":{"type":"string","index":"not_analyzed"},"washing_method":{"type":"string","index":"not_analyzed"},"water_&_ice_dispenser":{"type":"string","index":"not_analyzed"},"water_bottle_capacity":{"type":"string","index":"not_analyzed"},"water_consumption":{"type":"string","index":"not_analyzed"},"water_dispenser":{"type":"string","index":"not_analyzed"},"water_flow_rate":{"type":"string","index":"not_analyzed"},"water_resistant":{"type":"string","index":"not_analyzed"},"water_tank_capacity":{"type":"string","index":"not_analyzed"},"waterproof":{"type":"string","index":"not_analyzed"},"watertight":{"type":"string","index":"not_analyzed"},"wavelength":{"type":"string","index":"not_analyzed"},"weather_proof":{"type":"string","index":"not_analyzed"},"weave_type":{"type":"string","index":"not_analyzed"},"web_camera":{"type":"string","index":"not_analyzed"},"weight":{"type":"string","index":"not_analyzed"},"weight_of_microphone_with_cables":{"type":"string","index":"not_analyzed"},"weight_supported":{"type":"string","index":"not_analyzed"},"wet_grinding":{"type":"string","index":"not_analyzed"},"wheel_support":{"type":"string","index":"not_analyzed"},"wheeled":{"type":"string","index":"not_analyzed"},"wheels_included":{"type":"string","index":"not_analyzed"},"wi-fi":{"type":"string","index":"not_analyzed"},"width":{"type":"string","index":"not_analyzed"},"width_per_panel":{"type":"string","index":"not_analyzed"},"width_when_open":{"type":"string","index":"not_analyzed"},"width_x_height_x_depth":{"type":"string","index":"not_analyzed"},"wifi_enabled":{"type":"string","index":"not_analyzed"},"wired\/wireless":{"type":"string","index":"not_analyzed"},"wireless":{"type":"string","index":"not_analyzed"},"wireless_connectivity":{"type":"string","index":"not_analyzed"},"wireless_lan":{"type":"string","index":"not_analyzed"},"wireless_network_connectivity":{"type":"string","index":"not_analyzed"},"wireless_speed":{"type":"string","index":"not_analyzed"},"wireless_type":{"type":"string","index":"not_analyzed"},"with_beans":{"type":"string","index":"not_analyzed"},"with_door":{"type":"string","index":"not_analyzed"},"with_fragrance":{"type":"string","index":"not_analyzed"},"with_holder":{"type":"string","index":"not_analyzed"},"with_indicator_lights":{"type":"string","index":"not_analyzed"},"with_light":{"type":"string","index":"not_analyzed"},"with_mattress":{"type":"string","index":"not_analyzed"},"with_pillow_cover":{"type":"string","index":"not_analyzed"},"with_pins":{"type":"string","index":"not_analyzed"},"word_processor":{"type":"string","index":"not_analyzed"},"work":{"type":"string","index":"not_analyzed"},"working_current":{"type":"string","index":"not_analyzed"},"wrinkle-free":{"type":"string","index":"not_analyzed"},"image_url_mini":{"type":"string","index":"not_analyzed"},"product_shipping_base_info":{"type":"string","index":"not_analyzed"},"sub-category":{"type":"string","index":"not_analyzed"},"warranty_duration":{"type":"string","index":"not_analyzed"},"card_class":{"type":"string","index":"not_analyzed"},"number_of_cells":{"type":"string","index":"not_analyzed"},"RAM":{"type":"string","index":"not_analyzed"},"RAM Size (GB)":{"type":"string","index":"not_analyzed"},"productbrand":{"type":"string","index":"not_analyzed"},"producturl":{"type":"string","index":"not_analyzed"}}}

  }



{
	  "news-news_india": {
	    "mappings": {
	      "*": {
	        "dynamic_templates": [
	          {
	            "strings": {
	              "mapping": {
	                "type": "string",
	                "fields": {
	                  "raw": {
	                    "type": "keyword",
	                    "index": "not_analyzed"
	                  }
	                }
	              },
	              "match_mapping_type": "string"
	            }
	          }
	        ],
	        "properties": {
	          "3d": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "3d_support": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "3g": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "3g_via_dongle": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "4g": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "RAM": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "RAM Size (GB)": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "accessories_included": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "accuracy": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "activation_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "additional_features": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "adhesive_included": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "adjustable": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "adjustable_height": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "adjustable_lamps": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "adjustable_racks": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "adjustable_size": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "adjustable_spray_interval_timer": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "adjustable_straps": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "adjustable_temperature": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "adjustable_temperature_knob": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "adjustable_thermostat": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "advanced_features": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "advanced_technologies": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "age_group": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "air_delivery": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "air_flow_level": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "air_popper": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "air_suction_capacity": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "airtight": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "alarm_clock": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "alarm_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "altimeter": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "amd_processor": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "analog_tv_reception": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "antenna": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "antenna_capacity": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "antenna_system_-_am": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "anti-skid_system": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "anti_crease": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "anti_skid_base": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "anti_skid_seat": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "applicable_area": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "application_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "applications": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "applied_for": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "architecture": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "armrest_included": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "artificial_flower_&_plant_included": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "assembled": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "assembly_required": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "assorted_pack": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "ati_graphics": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "attached_handle": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "attached_to": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "attachment_compatible": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "attachment_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "attachments": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "attachments_present": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "atx_power_connectors": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "audible_alarm": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "audio_channels": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "audio_codec": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "audio_connector": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "audio_decoding_formats": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "audio_formats_supported": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "audio_i/o_channels": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "audio_jack": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "audio_out_(analog)": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "audio_out_(coaxial)": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "audio_output": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "audio_playback_formats": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "auto-revolving_heater": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "auto_cook_menu": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "auto_indian_cook_menu": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "auto_louver_movement": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "auto_restart": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "auto_shut_down": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "auto_shut_off": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "auto_start_function": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "autolift_feature": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "automatic_shut-off": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "automatic_shut_off": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "av_digital_output": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "av_multi_output": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "back_hieght": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "back_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "back_up_time": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "back_width": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "backing_material": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "backrest": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "bag_capacity": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "bag_design": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "bag_size": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "bag_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "baking": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "bandwidth": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "barometer": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "barware_included": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "base_diameter": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "base_features": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "base_frequency": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "base_material": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "batteries_included": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "battery": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "battery_backup": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "battery_capacity": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "battery_included": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "battery_life": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "battery_required": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "battery_requirements": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "battery_size": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "battery_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "bed_depth": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "bed_design": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "bed_height": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "bed_size": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "bed_skirt_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "bed_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "bed_weight": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "bed_width": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "bedding_size": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "belt_included": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "belt_loops": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "bios": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "black_&_white_poster": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "black_til": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "blade_included": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "blade_length": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "blade_material": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "blade_sweep": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "blendable": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "blind_weights": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "blouse_piece": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "blower/fan": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "blower/fan_material": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "bluetooth": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "bluetooth_enabled": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "bluetooth_version": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "board_material": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "board_size": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "body_finish": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "body_material": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "body_style": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "book_shelf_included": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "boot_shaft_height": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "bootie": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "bottle_size_compatibility": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "bottom_diameter": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "box_depth": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "box_height": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "box_width": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "bpa_free": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "brand": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "brand_color": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "brand_fit": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "breathable": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "brightness": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "bristle_material": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "broiler_safe": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "broom_clip": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "brush_material": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "bucket_material": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "bucket_weight": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "buffered/unbuffered": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "build_material": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "built-in_audio_interface": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "built-in_handle": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "built-in_ladder": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "built-in_light": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "built-in_mixer": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "built-in_soundcard": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "built-in_wringer": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "built_in_microphone": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "bulb_": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "bulb_base": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "bulb_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "burner_material": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "burner_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "burst_length": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "bus-core_ratio": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "bus_speed": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "bus_standard": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "bush_included": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "butter_tray": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "cabin_size": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "cable": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "cable_interface": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "cable_length": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "cable_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "cache_size": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "calendar": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "call_controls": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "call_function": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "call_transfer": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "caller_id_feature": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "calorie": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "camphor": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "candle_height": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "canopy": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "cap_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "capacity": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "capacity_(gb)": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "capacity_in_tons": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "carb_hole": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "card_class": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "care_and_cleaning": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "care_instructions": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "carrying/transport_options": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "case_material": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "casserole_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "castor_wheels": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "category": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "category_path": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "cavity_diameter": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "cavity_features": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "cd": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "cd_player": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "cd_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "central_processing_unit": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "centrifugal_juicer": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "certification": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "chain_included": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "chain_provided": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "chair_depth": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "chair_height": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "chair_weight": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "chair_width": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "chamber_present": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "channel_equalizer_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "character": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "charge_time": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "charger_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "chassis_material": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "chemical_resistant": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "chest_size": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "child_lock": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "chipset": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "chipset_manufacturer": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "choli_fabric": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "chopping_blade": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "christmas_tree_included": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "chronograph": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "circumference": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "citrus_juicer": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "clamp_included": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "clasp_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "class": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "classes": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "cleaning": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "cleaning_and_care": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "cleaning_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "clock": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "clock_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "closed_depth": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "closed_height": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "closed_width": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "closest_focus_distance": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "closure_mechanism": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "closure_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "cloth_size": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "coat_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "coating": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "coffee_table_included": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "colander_included": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "collapsible": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "collar": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "collection": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "collection_tray_included": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "color": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "color_poster": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "comforter_length": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "comforter_width": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "common_name": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "compass": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "compatible_baby_weight": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "compatible_battery_types": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "compatible_brand_names": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "compatible_device": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "compatible_female_connectors": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "compatible_headset_port_size": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "compatible_idol_length": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "compatible_idol_width": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "compatible_image_format": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "compatible_laptop_size": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "compatible_laptops": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "compatible_male_connectors": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "compatible_mmc": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "compatible_model": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "compatible_paper_width": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "compatible_processors": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "compatible_software": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "compatible_systems": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "compatible_tip_size": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "compatible_usb_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "compatible_with": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "compressible": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "compressor": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "condenser_fin_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "conference_calls": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "configuration": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "connectivity": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "connector_material": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "connector_plating": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "connector_size": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "connector_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "connectors": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "console_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "container_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "contrast_ratio": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "control": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "control_mechanism": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "control_panel_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "control_system": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "control_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "controller_ports": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "controllers": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "controls": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "convertible": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "cooking": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "cooking_completion_indicator": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "cooking_plate": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "cookware_included": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "cool_touch_handle": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "cooling_and_heatsink": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "cooling_capacity": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "cooling_coverage_area": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "cooling_media": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "cord_material": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "cord_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "corded/cordless": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "corkscrew_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "cornice_included": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "corrosion_resistant": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "cost_per_page": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "country_of_manufacture": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "cover": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "cover_material": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "cover_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "coverage_area": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "covered_in_warranty": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "cpu_compartment": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "cuff": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "cups": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "currency_value": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "current_required": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "cushion_material": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "customisable": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "customize_size": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "cutlery_capacity": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "cutter_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "cutting_diameter": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "cutting_length": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "cutting_width": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "data_download_speed": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "data_transfer_rate": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "database": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "date_&_time_display": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "decoding_capabilities": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "decoration_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "decorations_included": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "dedicated_buttons": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "deep_bass": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "defrosting_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "deity": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "delay_start": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "delivery_condition": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "demo_details": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "depth": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "design": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "design_code": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "designed_for": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "desktop_publishing": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "detachable_blades": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "detachable_mouthpiece": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "detection_range": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "developer": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "device_management": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "dhoop": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "dial_color": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "dial_shape": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "diameter": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "digital_display": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "digital_zoom": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "dimensions": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "dimmer": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "diopter_adjustment_range": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "disc_capacity": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "disc_load_capacity": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "dish_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "dishwasher_safe": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "disk_drive": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "display": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "display_indicator_functions": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "display_resolution": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "display_size": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "display_technology": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "display_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "disposable": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "domestic_term": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "domestic_warranty": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "door_alarm": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "door_finish": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "door_included": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "door_lock": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "door_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "downtube_length": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "dp_buckle": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "drainer_present": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "draining_hole": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "drawer_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "dressing_table_depth": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "dressing_table_height": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "dressing_table_weight": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "dressing_table_width": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "driver_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "drop_length": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "dry_grinding": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "dryer_capacity": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "drying_length": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "dual_sided": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "ductless": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "duplex_print": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "durability": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "dust_filter": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "dust_reduction": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "dust_resistant": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "duty_cycle_": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "dvd_player": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "dvi_and_hdmi_interface": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "dvi_ports": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "edger_capable": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "edible": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "edible_color_included": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "education_board": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "eer": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "efficiency": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "egg_tray": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "electric": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "electric_stirrer": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "electronic": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "embellishments": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "embroidered": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "emergency_power_off": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "enclosure_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "encryption": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "end_table_included": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "energy_saving": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "engine_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "error_check": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "error_correcting_support": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "estimated_delivery_time": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "ethernet": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "ethernet_(rj45)": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "ethernet_controller": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "ethernet_features": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "ethernet_support": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "evaporator_fin_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "exit_pupil": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "expandable": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "expandable_memory": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "expandable_storage_capacity": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "expansion_handsets": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "extendable": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "extendable_handle": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "exterior_size": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "external_depth": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "external_graphics_card_support": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "external_height": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "external_material": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "external_power_required": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "external_width": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "eye_relief": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "fabric": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "fabric_care": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "fade_resistant": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "fastening_mechanism": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "feather_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "features": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "feed_system": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "file_cabinet_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "filling_amount": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "filling_material": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "filling_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "filter_block_indicator": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "filter_present": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "filter_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "finish": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "finish_color": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "finish_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "fire_retardant_cable": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "firewall": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "fit": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "fit_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "fitting_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "fixing_method": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "fixture_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "fixtures_&_fittings_included": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "flame_safe": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "flash": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "flash_duration": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "flash_modes": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "flash_range": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "flask_material": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "flat_sheet_length": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "flat_sheet_width": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "flatwire": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "flavor": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "flexible": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "flexible_bristles": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "flexible_lip": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "flow_rate": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "flower_material": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "flowering_plant": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "fly": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "foam_bottom": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "focal_length": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "focus": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "foldable": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "foldable_umbrella": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "font_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "foot_coverage": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "footrest_included": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "footwear_rack_included": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "form": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "form_factor": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "formulation": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "fragrance": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "fragrance_intensity_control": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "fragrance_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "frame_color": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "frame_material": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "frame_rate": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "freezer_interior_light": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "freezer_safe": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "freezer_tray_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "frequency": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "frequency_band": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "frequency_range": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "frequency_response": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "front_panel_headers": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "front_ports": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "function_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "functions": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "funnel_capacity": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "funnel_expand": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "game_modes": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "garland": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "gas_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "gasket_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "genre": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "glass_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "gps": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "gpu_clock": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "graphic_processor": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "graphics": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "graphics_engine": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "graphics_technologies_supported": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "grating_blade": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "grinding": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "grip_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "ground_clearance": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "gsm_(edge/gprs)": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "guide_number": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "hand_washable": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "handcrafted": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "handle": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "handle_available": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "handle_included": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "handle_material": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "handle_present": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "handle_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "handmade": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "hands_free_support": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "handset_battery": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "handset_color": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "hang_hole": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "hanging_ring": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "hanging_space": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "hard_disk": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "hard_disk_capacity": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "hard_drive": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "hardware_memory": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "harness_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "hd": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "hd_technology_&_resolution": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "hdcp_support": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "hdd_capacity": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "hdmi": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "hdmi_port": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "hdmi_ports": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "head_material": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "head_support": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "headphone_driver_units": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "headphone_jack": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "headphone_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "headset_design": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "headset_driver_units": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "headset_frequency_response": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "headset_impedance": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "heat_resistant": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "heat_up_time": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "heater_material": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "heating_element": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "heating_element_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "heating_mechanism": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "heating_substances": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "heating_time": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "heel_height": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "height": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "height_adjustable_rack": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "height_of_microphone": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "hem": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "herbal": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "holders_present": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "hood_attached": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "hooded": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "hooks_available": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "hooks_present": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "horizontal_scanning_frequencies": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "horizontal_viewing_angle": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "hot_plate_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "housing_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "ice_chamber": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "ice_cube_tray_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "ideal_for": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "ideal_location": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "ideal_placement_height": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "idol_included": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "ignition_system": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "illuminated": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "illuminated_keys": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "image_enhancements_features": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "image_format": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "image_sensor_resolution": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "image_url_large": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "image_url_medium": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "image_url_mini": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "image_url_small": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "image_url_thumbnail": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "image_url_xlarge": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "impedance": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "impedance_subwoofer_(ohms)": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "important_note": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "in-built_heater": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "in-built_oil_collector": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "in_the_box": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "included_software_name": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "indicator_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "indoor": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "indoor_noise_level": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "induction_bottom": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "induction_safe": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "inflatable": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "inner_diameter": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "inner_fabric": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "inner_material": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "input/output_connectors": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "input_connection_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "input_devices": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "input_frequency": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "input_power": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "input_tray_capacity": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "input_tray_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "input_voltage": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "installation": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "installation_&_demo_details": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "installation_details": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "installation_features": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "instruction_sets": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "integrated_graphic_processor": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "integrated_graphics_card": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "intel_processor": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "intel_smart_cache": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "interactive": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "interactive_features": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "interchangable_sieve": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "interface": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "interior_size": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "internal_memory": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "internal_storage": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "iso_rating": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "jogwheels_present": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "joint_size": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "jug_included": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "juicer_blade_material": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "juicing": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "kettle_material": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "key_features": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "keyboard_skin_included": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "keyboard_tray": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "keypad": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "kneading": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "knife_length": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "knife_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "knit_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "knob_types": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "lamination_included": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "lamp_base_material": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "lamp_shade_material": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "lan": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "language": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "laptop_size": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "large_table_height": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "largest_table_depth": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "largest_table_width": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "laser_color": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "latency": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "layers": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "lcd_screen_size": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "led_indicator": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "led_light": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "led_stirrer": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "leds": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "lehenga_fabric": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "length": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "lens_present": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "lens_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "licenses": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "lid_included": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "lid_material": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "lid_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "life_indicator_present": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "lifespan": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "light_color": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "light_source": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "light_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "light_used": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "lighting_included": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "lighting_present": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "limited_edition": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "line_diameter": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "line_exit_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "lining": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "lip_material": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "liquidizing_jar": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "load_capacity": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "load_options": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "lockable_cabinet": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "locking_facility": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "locking_latch": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "locking_system": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "loung": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "luminous": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "lunch_box_capacity": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "lunch_box_material": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "mac_address_database": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "machine_washable": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "magnet_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "magnification": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "mail_features": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "main_unit_power_source": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "management_protocols": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "manufacturing_process": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "map_support": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "material": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "mattress_included": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "max_output_rms_-_per_satellite_(w)": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "max_output_rms_-_subwoofer_(w)": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "maximum_age": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "maximum_airflow": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "maximum_alarm_distance": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "maximum_cooling_temperature": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "maximum_cycles": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "maximum_display_size": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "maximum_expandable_iso_sensitivity": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "maximum_load": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "maximum_memory_bandwidth": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "maximum_memory_size_supported": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "maximum_power_input": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "maximum_print_resolution": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "maximum_resolution": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "maximum_shutter_speed": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "maximum_spike_current": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "maximum_spin_speed": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "maximum_temperature": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "maximum_weight_capacity": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "maximum_wireless_transmission_rate": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "measuring_range": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "measuring_spoon_sizes": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "mechanism": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "media_format": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "media_size_supported": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "media_types_supported": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "memory": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "memory_card_slot_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "memory_card_supported": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "memory_card_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "memory_channels_supported": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "memory_clock": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "memory_configuration": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "memory_feature": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "memory_frequency": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "memory_standard": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "memory_technology": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "memory_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "microphone_polar_pattern": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "microphone_transducer_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "microwave_safe": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "minimum_age": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "minimum_alarm_distance": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "minimum_temperature": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "minimum_weight": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "mirror_height": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "mirror_included": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "mirror_surface": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "mirror_width": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "missed_call_notification": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "model": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "model_id": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "model_number": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "model_series": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "modulation_technology": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "moisture_control": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "mop_material": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "mop_weight": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "motion_activated": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "motion_gaming": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "motor_overload_protection": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "motor_power": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "motor_speed": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "mount": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "mount_features": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "mounted": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "mounting_features": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "mounting_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "mouse_tray": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "mouth_diameter": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "mp3_bit_rates": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "mrp_currency": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "mtbf": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "multi-angle_reading": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "multi-functions": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "multiple_fruit_pitting": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "music_sensor": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "neck": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "net_depth": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "net_height": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "net_material": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "net_weight": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "net_width": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "network_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "nib_finish": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "night_vision_mode": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "noise_cancellation_headphones": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "noise_cancellation_mircrophone": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "noise_level": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "noise_reduction_&_cancellations": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "non-absorbent": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "non-porous": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "non-skid_feet": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "non-slip": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "non-slip_feet": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "non-stick": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "non-stick_coating": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "non-stick_safe": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "non-toxic": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "non_stick_surface": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "non_toxic": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "nose_piece_diameter": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "not_covered_in_warranty": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "notes_editor": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "notification_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "novelty_feature": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "nozzle_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_for_arms": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_absorbers": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_adapters": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_antennas": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_bags": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_bakery_dipping_tools": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_baking_rollers": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_baking_stencils": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_balls": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_batteries": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_bell_pull_ends": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_bells": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_benches": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_blades": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_boards": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_bottles": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_boxes": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_brushes": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_bulb": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_bunks": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_burners": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_bus": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_buttonhole_styles": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_buttons": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_cake_testers": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_candles": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_castor_wheels": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_cavities": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_cells": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_chairs": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_channels": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_charging_ports": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_chopsticks": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_cocktail_shakers": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_colors": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_compartments": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_connectors": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_containers": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_contents": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_cores": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_crayons": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_cupcake_inserts": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_cups": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_cut-outs": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_cutters": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_decks": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_devices_supported": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_die_plates": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_disks": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_dispensers": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_display_hands": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_donuts": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_doors": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_drawers": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_dumpling_press": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_eggs_boiled": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_ethernet_ports": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_faders": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_feathers": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_finger_guards": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_flashes": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_folds": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_functions": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_funnels": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_glasses": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_hand_muller_grinder": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_hands": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_headers": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_heat_settings": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_holders": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_hooks": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_icing_couplers": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_incense_sticks": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_indicators": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_input_options": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_items": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_jars": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_knobs": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_lan_ports": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_languages": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_layers": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_led_bulbs": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_lights": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_memory_slots": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_nozzles": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_ornaments": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_outlets": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_output_options": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_paint_shades": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_panels": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_party_blowouts": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_people": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_photos": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_pieces": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_pipe_openings": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_plates": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_players": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_pockets": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_ports": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_privacy_codes": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_punch_heads": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_racks": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_rails": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_recliners": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_reclining_positions": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_refrigerator_shelves": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_rings": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_ringtones": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_scoops": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_settings": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_sheets": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_shelves": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_shoe_pairs": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_sketch_pens": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_slices": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_slots": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_sockets": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_soundcards": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_speakers": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_speed_settings": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_speeds": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_stemware_supported": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_stencils": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_stitches": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_stones": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_tables": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_threads": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_tiers": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_tools": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_trim_lines": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_tubes": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_usb_ports": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_wan_ports": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_wash_programs": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_wheels": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "number_of_zippers": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "nvidia_graphic": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "objective_diameter": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "occasion": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "odorless": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "on-board_effects": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "on_board_(size_wise)_for_airline": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "one_button": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "online_platform": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "open_depth": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "opening_mechanism": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "operating__humidity": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "operating_current": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "operating_humidity_range": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "operating_modes": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "operating_system": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "operating_temperature": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "operating_time": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "operating_voltage": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "operation": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "operation_temperature": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "operation_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "operational_modes": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "optical_drive": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "optical_scanning_resolution": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "optical_sensor_resolution_(in_megapixel)": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "optical_zoom": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "organic": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "organiser_email": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "orientation": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "origin_of_manufacture": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "orthopaedic_support": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "os_supported": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "osd_languages_supported": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "otg_safe": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "other_air_flow_features": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "other_audio_features": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "other_blades": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "other_body_and_design_features": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "other_body_features": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "other_build_features": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "other_cable_and_connector_features": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "other_call_features": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "other_camera_features": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "other_comfort_features": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "other_conductor_features": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "other_connectivity_features": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "other_convenience_features": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "other_cooking_features": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "other_crayon_features": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "other_dimensions": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "other_display_features": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "other_door_features": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "other_features": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "other_fitness_features": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "other_graphics_features": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "other_included_services": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "other_keypad_features": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "other_marker_features": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "other_materials": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "other_menu_features": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "other_microphone_capsule_features": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "other_mosquito_net_features": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "other_paint_features": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "other_pencil_features": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "other_performance_features": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "other_power_features": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "other_protective_features": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "other_rack_features": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "other_requirements": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "other_safety_and_convenience_features": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "other_security_features": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "other_sensor_features": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "other_settings_&_indicators": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "other_sketch_pen_features": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "other_sports_and_action_camera_features": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "other_video_features": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "other_viewfinder_features": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "others": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "ottoman_included": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "outdoor": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "outer_diameter": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "outer_fabric": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "outer_material": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "output_frequency": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "output_power": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "output_power_wattage": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "output_tray_capacity": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "output_tray_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "output_voltage": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "output_waveform": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "oven_safe": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "over_volt_protection": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "overall_length": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "overheat_protection": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "ozone_output": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "pack_of": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "packaging": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "paint_medium": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "pan_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "panel_direction": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "panel_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "paper_capacity": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "paper_depth": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "paper_finish": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "paper_roll_diameter": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "paper_specification": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "paper_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "part": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "part_number": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "parts_within": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "pattern": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "pattern_repeat": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "pc_audio_in": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "pci_slots": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "pedal": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "pedal_included": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "peeler_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "pegi__rating": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "percolator_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "performance_mode_types": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "phase": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "phonebook_entries": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "picture_angle": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "pillow_cover_length": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "pillow_cover_width": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "pillow_design": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "pillow_provided": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "pillow_top": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "pins": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "pixel_pitch": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "place_of_use": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "placement": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "plate_diameter": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "plate_material": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "plate_size": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "plate_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "platform": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "platform_size": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "platter_height": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "platter_width": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "play_time": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "playback_modes": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "pocket_included": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "pockets": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "polish_dispenser_capacity": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "port_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "portable": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "ports_available": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "pot_material": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "pourer_provided": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "power_adapter": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "power_adapter_input": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "power_consumption": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "power_consumption_-_cooling": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "power_consumption_-_grill": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "power_cord_length": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "power_input": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "power_levels": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "power_light_indicator": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "power_output": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "power_over_ethernet": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "power_requirement": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "power_saving_mode": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "power_source": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "power_supply": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "powered_by": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "pre-assembled": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "pre-heating_time": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "pre-installed_browser": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "precious_stones_present": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "presentation": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "press_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "pressing_style": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "primary_camera": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "primary_color": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "primary_material": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "primary_material_subtype": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "primary_product_size": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "print_contrast": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "print_speed_mono": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "print_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "printed": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "printing_method": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "printing_output": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "processing_bowl": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "processor": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "processor_name": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "processor_speed": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "processor_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "productId": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "product_depth": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "product_height": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "product_id": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "product_shipping_base_info": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "product_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "product_url": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "product_weight": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "product_width": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "productbrand": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "producturl": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "projection_distance": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "projection_screen_size": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "projector_included": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "protection": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "protection_against": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "providerId": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "ps/2": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "publisher": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "punching_capacity": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "purification_method": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "purpose": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "quantity": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "racks_&_trays_available": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "radio": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "radio_tuner": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "radio_tuner_support": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "radio_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "raid_configurations": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "raid_controller": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "railing_included": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "rainfly_included": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "ram": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "range": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "rated_life": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "rated_pressure": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "rear_camera": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "rear_ports": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "receiver_sensitivity": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "recessed_area": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "recharge_time": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "rechargeable": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "rechargeable_battery": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "recycling_time": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "redial_memory": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "refillable_bean": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "refresh_rate": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "refrigerator_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "region": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "reinforced_edges": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "remote": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "remote_control": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "removable": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "removable_base_tray": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "removable_filter": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "removable_gasket": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "removable_inner_potty": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "removable_insole": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "removable_rack": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "replaceable_head": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "replacement_battery": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "residue_free_removal": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "resolution": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "response_time": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "reusable": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "reversible": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "reversible_mattress": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "rf_capable": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "rf_connectivity_input": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "right_angle_plug": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "ring_diameter": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "robot_aquarium_animal": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "robotic": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "rocker": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "rod_": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "rolling_pin_material": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "rolling_pin_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "rollout_bed": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "rom": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "rotating_lens_angle": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "rotating_speed": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "rubber_gasket_included": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "runner_ends": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "runtime": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "rust_free": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "rust_proof": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "rust_resistant": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "safety_door_switch": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "safety_features": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "safety_locking": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "sales_package": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "scan_method": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "scan_rate": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "scanner_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "scented": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "scratch_resistant": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "screen_size": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "screen_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "seat_depth": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "seat_handles": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "seat_height": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "seat_lock_included": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "seat_width": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "seating_capacity": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "seating_provided": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "seating_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "secondary_camera": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "secondary_material": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "secondary_material_subtype": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "security": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "seller": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "selling_price_currency": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "sensitivity": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "sensor_size": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "sensor_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "sensors": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "seoTitle": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "series": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "serrated": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "service_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "set_contents": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "set_of": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "sewing_speed": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "shade": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "shaft_material": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "shaft_shape": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "shaft_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "shankh_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "shape": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "shelf_material": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "shelf_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "shipping_charges_currency": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "shock_resistant": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "shooting_modes": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "shopAICategory": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "shopAICategoryId": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "shoulder_strap": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "side_table_depth": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "side_table_height": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "side_table_weight": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "side_table_width": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "siderest_included": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "signal_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "silent_mode": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "sim": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "sim_size": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "sim_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "size": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "size_unit": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "slanted_back": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "sleep_mode": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "sleeve": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "sleeves": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "slice_capacity": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "slicer_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "slicing_blade": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "slide_bowl_material": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "slide_included": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "slip_resistant": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "slot_required": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "slot_shape": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "slow_motion": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "smallest_table_depth": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "smallest_table_height": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "smallest_table_width": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "smart_tv": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "socket_material": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "socket_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "soft_close": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "software_included": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "software_requirement": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "solar_power_compatible": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "sole_cleaner_present": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "sole_material": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "soleplate_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "sound": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "sound_range": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "sound_support": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "sound_system": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "soundcard_capacity": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "space_for": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "spatula": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "speaker_output_rms": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "speaker_phone": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "speakers": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "special_price_currency": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "specified_voltage": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "speed": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "speed_dialing": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "spill_tray_included": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "sports_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "spout_present": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "spray_interval_settings": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "spreader_bar": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "spreader_bar_length": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "spreader_bar_material": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "spreadsheet": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "spring-loaded_plunger": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "stabilizer_required": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "stackable": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "stain_resistant": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "stand": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "standard_ieee": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "standby_current": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "standby_time": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "star_rating": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "stencil": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "step_count": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "stool_height": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "stool_included": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "stool_width": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "stopper_present": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "stopper_provided": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "storage": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "storage_capacity": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "storage_features": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "storage_humidity": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "storage_included": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "storage_temprature_range": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "strainer_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "strap_color": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "strap_material": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "strap_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "study_desk_available": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "style": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "style_code": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "sub-category": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "sub-type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "subjects": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "subscription_validity": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "subwoofer": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "subwoofer_(width_x_height_x_depth)": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "subwoofer_weight": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "suitable_for": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "suitable_photo_size": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "suitable_weather": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "sulphur_free": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "support_mechanism": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "support_stand_included": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "supported_aspect_ratio": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "supported_interfaces": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "supported_languages": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "supported_networks": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "supported_protocols": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "supported_standards": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "supports_gaming_consoles": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "surface_features": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "sweat_absorbent": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "switch_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "swivel": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "swivel_cord": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "system_memory": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "system_requirement": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "table_depth": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "table_height": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "table_shape": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "table_weight": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "table_width": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "tabletop_thickness": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "talk_time": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "talktime": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "tapered": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "tare_function": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "target_distance": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "technician_visit_details": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "technology": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "technology_used": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "telephone_line_support": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "temperature": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "temperature_control_range": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "temperature_controller": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "temperature_range": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "temperature_rating": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "tent_included": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "texture": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "the_handle_length": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "theme": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "thermal_cutoff": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "thermo_shield_protection": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "thermostat": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "thickness": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "thread_count": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "three_seater_depth": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "three_seater_height": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "three_seater_weight": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "three_seater_width": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "thumb_guard": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "tilt_angle": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "time_taken": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "timer": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "timer_present": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "tint": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "tip-over_switch": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "tip_design": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "tip_shape": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "tog_rating": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "tong_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "tools": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "top_closure": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "top_compartment_dimensions": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "top_rail_included": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "total_jars": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "total_length": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "touch_screen": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "touch_sensor": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "toy_bar": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "transfer_time": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "transmit_power": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "transparency": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "transparent_body": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "tray_top_included": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "tray_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "tread_count": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "treatment_form": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "treatment_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "tree_shape": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "tree_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "trivet_material": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "trolley": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "tub_material": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "tumble_speed": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "tuner": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "turbo_boost": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "turntable": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "turntable_diameter": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "tweeter_support": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "two_seater_depth": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "two_seater_height": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "two_seater_weight": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "two_seater_width": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "type_of_blade": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "type_of_feeder": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "type_of_headset": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "type_of_seed": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "type_of_settings": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "type_of_tools": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "types_of_devices_controlled": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "umbrella_hole": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "umbrella_included": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "under_volt_protection": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "uninstallation_details": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "units_of_measurement": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "universal_voltage": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "upgradeable_memory": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "upholstered": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "upholstery_color": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "upholstery_included": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "upholstery_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "url": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "usage": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "usage_instructions": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "usb": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "usb_cable": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "usb_charging_port": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "usb_connectivity": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "usb_connector": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "usb_port": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "usb_support": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "use_time": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "used_for": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "utensils_held": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "utensils_safe": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "uv_lamp": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "valance_included": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "variable_thickness_control": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "variant": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "vase_included": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "version": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "vertical_viewing_angle": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "vga": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "vga/d_sub_ports": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "video_decoding_formats": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "video_encoding": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "video_enhancement": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "video_format": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "video_formats_supported": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "video_out_(composite)": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "video_output_resolution": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "video_playback_formats": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "video_playback_time": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "video_player_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "video_resolution": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "video_sensor_resolution": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "view_angle": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "viewfinder_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "viewing_area": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "virtualisation": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "vlan_support": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "voice_call": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "voice_operated_recording_(vor)": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "voltage": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "voltage_required": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "volume": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "volume_control_indicator": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "volumetric_weight": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "vox_support": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "vpn": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "waist": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "waist_band": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "wall_mount": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "wall_mountable_satellites": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "wall_mounting": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "wall_thickness": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "wan": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "wardrobe_depth": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "wardrobe_height": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "wardrobe_weight": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "wardrobe_width": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "warranty": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "warranty_duration": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "warranty_service_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "warranty_summary": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "warranty_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "wash_care_instructions": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "wash_program_types": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "washable": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "washing_capacity": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "washing_instructions": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "washing_method": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "water_&_ice_dispenser": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "water_bottle_capacity": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "water_consumption": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "water_dispenser": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "water_flow_rate": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "water_resistant": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "water_tank_capacity": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "waterproof": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "watertight": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "wavelength": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "weather_proof": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "weave_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "web_camera": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "weight": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "weight_of_microphone_with_cables": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "weight_supported": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "wet_grinding": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "wheel_support": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "wheeled": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "wheels_included": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "wi-fi": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "width": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "width_per_panel": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "width_when_open": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "width_x_height_x_depth": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "wifi_enabled": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "wired/wireless": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "wireless": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "wireless_connectivity": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "wireless_lan": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "wireless_network_connectivity": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "wireless_speed": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "wireless_type": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "with_beans": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "with_door": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "with_fragrance": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "with_holder": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "with_indicator_lights": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "with_light": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "with_mattress": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "with_pillow_cover": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "with_pins": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "word_processor": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "work": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "working_current": {
	            "type": "string",
	            "index": "not_analyzed"
	          },
	          "wrinkle-free": {
	            "type": "string",
	            "index": "not_analyzed"
	          }
	        }
	      }
	    }
	  }
	}


