package com.news.tiddlywink.utils;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.json.JSONObject;


public class TiddlywinkConstants {
	public static final String CLUSTER_NAME = "cluster.name";
	public static String DOMAIN = System.getenv("DOMAIN")==null?"ShopAI_India":System.getenv("DOMAIN");
	public static String TETRIS_ENV = System.getenv("TETRIS_ENV");
	public static String SHOPAI_INDEX = "news-"+DOMAIN.toLowerCase();
	public static String SHOPAI_PROVIDER_METADATA_KEY="providerMetadata-"+DOMAIN;
	public static String SHOPAI_CATEGORIES_KEY="categories-"+DOMAIN;
	public static String SHOPAI_ENDPOINTS_KEY="endpoints-"+DOMAIN;
	public static String SHOPAI_GLOBAL_PROPS="globalProperties";
	public static String SHOPAI_DEALS_INDEX = "shopcompare-deals";
	public static String REDIS_HOST_IP="sl-us-dal-9-portal.5.dblayer.com";
	public static String PRODUCT_TYPE = null;
	public static Map<String, JSONObject> SHOPAI_PROVIDER_CATEGORIES_MAPPING = new HashMap<String, JSONObject>();
	public static JSONObject SHOPAI_ENDPOINTS = null;
	public static JSONObject SHOPAI_PROVIDER_MAPPING = null;
	public static JSONObject SHOPAI_AMAZON_MAPPING = null;
	public static JSONObject SHOPAI_CATEGORIES_PRIORITY = new JSONObject();
	public static final String SHOPAI_ELASTIC_MASTER_HOST_NAME = System.getenv("ES");
	public static final Integer SHOPAI_ELASTIC_PORT = 9300;
	public static JSONObject PROPERTIES = new JSONObject();
	public static  Map<String, Set<String>> PropertiesArray = new HashMap<String,Set<String>>();
	
	public static Map<String, String> affiliates = new HashMap<String, String>();
	public static Map<String, String> payoomAffiliates = new HashMap<String, String>();
	

}
