
package com.news.tiddlywink.context;

import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.Iterator;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

import org.elasticsearch.client.Client;
import org.elasticsearch.client.transport.TransportClient;
import org.elasticsearch.common.settings.Settings;
import org.elasticsearch.common.transport.InetSocketTransportAddress;
import org.elasticsearch.shield.ShieldPlugin;
import org.json.JSONArray;
import org.json.JSONObject;

//import com.news.tiddlywink.connectors.RedisConnector;
//import com.news.tiddlywink.helper.ConfigHelper;
import com.news.tiddlywink.utils.TiddlywinkConstants;

import redis.clients.jedis.Jedis;

/**
 * @author naresh
 *
 */
public class TiddlywinkServletContext implements ServletContextListener {
	public static Client transportClient = null;
	public static final String SHOPAI_CLUSTER_NAME = "news-cluster";
	// public static final String SHOPAI_ELASTIC_MASTER_HOST_NAME = "localhost";

	@Override
	public void contextDestroyed(ServletContextEvent arg0) {

		transportClient.close();
	}

	@Override
	public void contextInitialized(ServletContextEvent arg0) {

		Settings settings = Settings.settingsBuilder()
				.put("cluster.name", "news-cluster")
//				.put("client.transport.sniff", true)
				.put("shield.user", "es_admin:ShOpAiElAsTiC")
				.put("transport.tcp.port", "9300").build();
		try {
			transportClient = TransportClient.builder().settings(settings).addPlugin(ShieldPlugin.class)
					.settings(settings).build()
					.addTransportAddress(new InetSocketTransportAddress(
							InetAddress.getByName(TiddlywinkConstants.SHOPAI_ELASTIC_MASTER_HOST_NAME),
							TiddlywinkConstants.SHOPAI_ELASTIC_PORT));
//			RedisConnector connector = new RedisConnector();
			System.out.println(TiddlywinkConstants.SHOPAI_INDEX);
			// ProductProducer.init("PRODUCT_DETAILS");

		} catch (UnknownHostException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}
