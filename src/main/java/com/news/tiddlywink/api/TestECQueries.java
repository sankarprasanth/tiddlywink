/**
 *
 */
package com.news.tiddlywink.api;

import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.elasticsearch.action.search.SearchRequestBuilder;
import org.elasticsearch.action.search.SearchResponse;
import org.elasticsearch.action.search.SearchType;
import org.elasticsearch.client.Client;
import org.elasticsearch.client.transport.TransportClient;
import org.elasticsearch.common.settings.Settings;
import org.elasticsearch.common.transport.InetSocketTransportAddress;
import org.elasticsearch.index.query.MatchQueryBuilder;
import org.elasticsearch.index.query.QueryBuilders;
import org.elasticsearch.index.query.TermQueryBuilder;
import org.elasticsearch.search.SearchHit;

/**
 * @author naresh
 *
 */
public class TestECQueries {

	public static Client transportClient = null;
	public static final String SHOPAI_CLUSTER_NAME="news-cluster";
	public static final String SHOPAI_ELASTIC_MASTER_HOST_NAME = "localhost";
	//public static final String SHOPAI_ELASTIC_MASTER_HOST_NAME = "176.9.140.162";
	public static final Integer SHOPAI_ELASTIC_PORT=9300;


	public static void getAllFieldsByCategory(){




		Settings settings = Settings.settingsBuilder().put("cluster.name",SHOPAI_CLUSTER_NAME ).build();
		try {
			transportClient = TransportClient.builder().settings(settings).build()
					.addTransportAddress(new InetSocketTransportAddress(InetAddress.getByName(SHOPAI_ELASTIC_MASTER_HOST_NAME), SHOPAI_ELASTIC_PORT));
		} catch (UnknownHostException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		List<Map<String, Object>> result = new ArrayList<Map<String, Object>>();


//        SearchRequestBuilder srb = transportClient.prepareSearch("shopcompare")
//                .setSearchType(SearchType.DFS_QUERY_THEN_FETCH);
//        MatchQueryBuilder mqb;
//
//        mqb = QueryBuilders.matchQuery("category", "desktops");
//        srb.setQuery(mqb);


        SearchResponse response = transportClient.prepareSearch("shopcompare")
              // .setTypes("type1", "type2")
                .setSearchType(SearchType.DFS_QUERY_THEN_FETCH)
                .setQuery(QueryBuilders.termQuery("category", "desktops"))
                .setQuery(QueryBuilders.termQuery("color", "red")) // Query
               // .setPostFilter(QueryBuilders.rangeQuery("age").from(12).to(18))     // Filter
               // .setFrom(0).setSize(60).setExplain(true)
                .setSize(0)
                .execute()
                .actionGet();
       // SearchResponse response = srb.execute().actionGet();
        long totalHitCount = response.getHits().getTotalHits();

        System.out.println(response.getHits().getTotalHits());
        Set<String> catSet = new HashSet<String>();
        for (SearchHit hit : response.getHits()) {
            catSet.addAll(hit.getSource().keySet());

        }
        System.out.println(catSet.size());




	}

public static void getAllCategories(){




		Settings settings = Settings.settingsBuilder().put("cluster.name",SHOPAI_CLUSTER_NAME ).build();
		try {
			transportClient = TransportClient.builder().settings(settings).build()
					.addTransportAddress(new InetSocketTransportAddress(InetAddress.getByName(SHOPAI_ELASTIC_MASTER_HOST_NAME), SHOPAI_ELASTIC_PORT));
		} catch (UnknownHostException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		List<Map<String, Object>> result = new ArrayList<Map<String, Object>>();

		  SearchResponse response = transportClient.prepareSearch("shopcompare")
	              // .setTypes("type1", "type2")
				    .setSearchType(SearchType.DFS_QUERY_THEN_FETCH)
				    .setQuery(QueryBuilders.queryStringQuery("category:bag OR category:computer"))
	                // .setPostFilter(QueryBuilders.rangeQuery("age").from(12).to(18))     // Filter
	               //.setFrom(0).setSize(60).setExplain(true)
	               // .setSize(0)
	                .execute()
	                .actionGet();
        long totalHitCount = response.getHits().getTotalHits();
        response = transportClient.prepareSearch("shopcompare")
	              // .setTypes("type1", "type2")
				    .setSearchType(SearchType.DFS_QUERY_THEN_FETCH)
				    .setQuery(QueryBuilders.queryStringQuery("category:bag OR category:computer"))
	               // .setPostFilter(QueryBuilders.rangeQuery("age").from(12).to(18))     // Filter
	               //.setFrom(0).setSize(60).setExplain(true)
	               .setSize((int) response.getHits().getTotalHits())
	                .execute()
	                .actionGet();

        System.out.println(response.getHits().getTotalHits());
        Set<String> catSet = new HashSet<String>();
        for (SearchHit hit : response.getHits()) {
        	System.out.println(""+hit.getSource().get("category").toString());
           catSet.add(hit.getSource().get("category").toString());

        }
        System.out.println(catSet.size());




	}




	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		getAllFieldsByCategory();
		getAllCategories();

	}

}
