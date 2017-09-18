package com.news.tiddlywink.api;

import java.util.Iterator;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.codehaus.jettison.json.JSONObject;
import org.elasticsearch.action.admin.indices.mapping.get.GetMappingsResponse;
import org.elasticsearch.cluster.metadata.MappingMetaData;
import org.elasticsearch.common.collect.ImmutableOpenMap;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.carrotsearch.hppc.cursors.ObjectObjectCursor;
import com.news.tiddlywink.context.TiddlywinkServletContext;
import com.news.tiddlywink.utils.TiddlywinkConstants;

@Path("news")
public class NewsApi {
	private static final Logger logger = LoggerFactory.getLogger(NewsApi.class);

	@GET
	@Path("/trending")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getPropertiesByDomain(@Context HttpServletRequest requestContext,
			@QueryParam("ninja") String ninja) {
		JSONObject object = new JSONObject();
		try{
			System.out.println("*******getting trending*******");
			 object.put("key", "trending");
		}catch(Exception e){
			e.printStackTrace();
			logger.error("Exception in trending", e.getMessage());
		}
		return Response.status(200).entity(object).build();
	}

	@GET
	@Path("/general")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getProductsByCategory(@Context HttpServletRequest requestContext,
			@QueryParam("ninja") String ninja) {
		try{
			System.out.println("*******getting general*******");
		}catch(Exception e){
			e.printStackTrace();
			logger.error("Exception in general", e.getMessage());
		}
		return Response.status(200).entity("general").build();
	}
}
