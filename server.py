#!/bin/python

from flask import Flask
from flask import render_template
from flask import jsonify
from influxdb import InfluxDBClient

app = Flask(__name__)

hostName = "asb"

@app.route("/")
def hello():
    return render_template("index.html")

@app.route("/api/temperature")
def get_temperature():
    # client = InfluxDBClient(hostName, 8086, '', '', 'mini-iot')
    # result = client.query('select * from temperature group by source order by time desc limit 100;')

    resultJson = {"results":[{"series":[{"name":"temperature","tags":{"source":"red"},"columns":["time","value"],"values":[[1519200437000000000,28.115406036376953],[1519200436000000000,28.02581787109375],[1519200435000000000,28.115406036376953],[1519200434000000000,28.151241302490234],[1519200433000000000,28.34833526611328],[1519200432000000000,28.258747100830078],[1519200431000000000,28.151241302490234],[1519200430000000000,28.187076568603516],[1519200429000000000,28.115406036376953],[1519200428000000000,28.151241302490234]]}]},{"series":[{"name":"temperature","tags":{"source":"blue"},"columns":["time","value"],"values":[[1519200437000000000,27.125],[1519200436000000000,27.125],[1519200435000000000,27.26785659790039],[1519200434000000000,27.125],[1519200433000000000,27.26785659790039],[1519200432000000000,27.16071319580078],[1519200431000000000,27.178569793701172],[1519200430000000000,27.178569793701172],[1519200429000000000,27.28571319580078],[1519200428000000000,27.23214340209961]]}]}]}
    values = resultJson.get("results")[0]['series'][0]['values']

    print(values)

    return jsonify(values)

if __name__ == "__main__":
    app.run()