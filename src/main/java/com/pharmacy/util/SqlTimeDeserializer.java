package com.pharmacy.util;

import java.io.IOException;
import java.sql.Time;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;

public class SqlTimeDeserializer extends JsonDeserializer<Time> {

	@Override
	public Time deserialize(JsonParser p, DeserializationContext ctxt) throws IOException, JsonProcessingException {
	
		return Time.valueOf(p.getValueAsString()+":00");
	}
}
