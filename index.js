/* //javascript
d3.select();
d3.selectAll();

d3.select("h1")
  .style("color", "red")
  .attr("class", "heading")
  .text("updated");

d3.select("body")
  .append("p")
  .text("first paragraph");
 */

var dataset = [1, 2, 3, 4, 5];

d3.select("body")
  .selectAll("p")
  .data(dataset)
  .enter()
  .append("p")
  .text(function(d) {
    return d;
  });
