"use strict";

module.exports = {
  test: async (ctx, next) => {
    const results = await strapi
      .documents("api::performance.performance")
      .findMany({
        filters: {
          $and: [
            {
              date: {
                $gte: "2024-01-01",
              },
            },
            {
              date: {
                $lte: "2024-12-31",
              },
            },
          ],
        },
      });

    console.log("performance test controller - results:", results);

    ctx.body = results;
  },
};
