sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("com.splitapp.controller.Detail3", {

		onPress: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("Detail");
		},

		onInit: function() {
			var oVizFrame = this.getView().byId("idcolumn");

			var oModel = new sap.ui.model.json.JSONModel();
			var data = {

				'Gas': [{
					"ID": 1003,
					"Gas": "O2",
					"Max": 100,
					"Current": 20

				}, {
					"ID": 1003,
					"Gas": "NO2",
					"Max": 120,
					"Current": 40
				}]
			};
			oModel.setData(data);

			var oDataset = new sap.viz.ui5.data.FlattenedDataset({

				dimensions: [{
					name: 'Gas',
					value: "{Gas}"
				}],
				measures: [{
					name: "Max",
					value: "{Max}"
				}, {
					name: "Current",
					value: "{Current}"
				}],
				data: {
					path: "/Gas"
				}
			});
			oVizFrame.setDataset(oDataset);
			oVizFrame.setModel(oModel);
			oVizFrame.setVizType("vertical_bullet");

			oVizFrame.setVizProperties({
				plotArea: {
					colorPalette: d3.scale.category20().range()

				},
				
					title: {
					alignment: "center",
					font:"bold",
					visible: true,
					text: 'Gas Levels'
				}
				
			});

			var feedValueAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
					'uid': "valueAxis",
					'type': "Measure",
					'values': ["Current"]

				}),

				feedCategoryAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
					'uid': "categoryAxis",
					'type': "Dimension",
					'values': ["Gas"]
				});

			var feedTargetAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
				'uid': "targetValues",
				'type': "Measure",
				'values': ["Max"]

			});
			oVizFrame.addFeed(feedValueAxis);
			oVizFrame.addFeed(feedCategoryAxis);
			oVizFrame.addFeed(feedTargetAxis);

			var oVizFrame = this.getView().byId("idcolumn1");

			var oModel = new sap.ui.model.json.JSONModel();
			var data = {

				'GasConsum': [{
					"Month": "Jan",
					"Amount": "32000"
				}, {
					"Month": "Feb",
					"Amount": "17000"
				}, {
					"Month": "Mar",
					"Amount": "9000"
				}, {
					"Month": "April",
					"Amount": "78000"
				}, {
					"Month": "May",
					"Amount": "65000"
				}, {
					"Month": "June",
					"Amount": "31000"
				}, {
					"Month": "July",
					"Amount": "65000"
				}, {
					"Month": "Aug",
					"Amount": "47000"
				}]
			};
			oModel.setData(data);

			var oDataset = new sap.viz.ui5.data.FlattenedDataset({

				dimensions: [{
					name: 'Month',
					value: "{Month}"
				}],
				measures: [{
					name: "Amount",
					value: "{Amount}"
				}],
				data: {
					path: "/GasConsum"
				}
			});
			oVizFrame.setDataset(oDataset);
			oVizFrame.setModel(oModel);
			oVizFrame.setVizType("line");

			oVizFrame.setVizProperties({
				plotArea: {
					colorPalette: d3.scale.category20().range()

				},
				
					title: {
					alignment: "center",
					font:"bold",
					visible: true,
					text: "Gas Consumptions"
				}
			});

			var feedValueAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
					'uid': "valueAxis",
					'type': "Measure",
					'values': ["Amount"]

				}),

				feedCategoryAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
					'uid': "categoryAxis",
					'type': "Dimension",
					'values': ["Month"]
				});

			oVizFrame.addFeed(feedValueAxis);
			oVizFrame.addFeed(feedCategoryAxis);

		}

	});

});