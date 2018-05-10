---


---

<h1 id="publishing-plotly-graph-to-blogs-using-rpubs">Publishing Plotly Graph to Blogs using RPubs</h1>
<h2 id="requirements">Requirements</h2>
<p>You need to get the R machine from <a href="https://cran.kst.asia/">https://cran.kst.asia/</a>, then download RStudio from <a href="https://www.rstudio.com/products/rstudio/download/#download">https://www.rstudio.com/products/rstudio/download/#download</a>.<br>
Launch the Rstudio, then install the required packages using the console.<br>
<code>install.packages("PACKAGE_NAME")</code><br>
The list of packages needed available in the script.</p>
<h2 id="the-script">The Script</h2>
<p>Create a new RScript, and paste the following code for our library. You need to install it before using it.</p>
<pre><code>library(stringr)
library(syuzhet)
library(ggplot2)
library(plotly)
library(knitr)
library(dplyr)
library(reshape2)
library(RColorBrewer)
</code></pre>
<p>Then get your CSV and extract it properly<br>
<code>testdf &lt;- data.frame(read.csv("PATH_TO_FILE", header=TRUE, sep=",", stringsAsFactors = FALSE))</code></p>
<h3 id="the-graph">The graph</h3>
<p>The main GGPlot object<br>
<code>ggplot(testdf, aes(X_AXIS_HEADER, Y_AXIS_HEADER, col=variable))</code></p>
<p>Let’s put some labels<br>
<code>labs(title="YOUR_TITLE", x="X_AXIS_LABLE", y="Y_AXIS_LABLE", color="LABLE_ABOVE_COLOR_DESCRIPTION", pch="LABEL_AT_POINTS")</code></p>
<blockquote>
<h4 id="color-background"><em>Color Background</em></h4>
<p>We should have been able to create colored background by creating rectangles and fil it with color.<br>
<code>annotate("rect", xmin=LEFT, xmax=RIGHT, ymin=BOTTOM, ymax=TOP, alpha=.4, fill="COLOR")</code><br>
But there is a problem later in converting the graph from ggplot to plotly that makes the color disappear. We have not found any way to resolve this issue yet.</p>
</blockquote>
<p>Set colour pallet for aesthetic purpose<br>
<code>scale_color_brewer(palette = "Set1")</code></p>
<p>Add the smooth regression line &amp; suggested configuration. Further configuration can be looked at <a href="http://ggplot2.tidyverse.org/reference/geom_smooth.html">http://ggplot2.tidyverse.org/reference/geom_smooth.html</a>.</p>
<pre><code>geom_smooth(alpha=0.2, mapping = NULL, data = testdf, stat = "smooth",
              position = "identity", method = "auto", formula = y ~ x,
              method.args=list(degree=2, family="symmetric"),
              se = TRUE, na.rm = FALSE, show.legend = NA, inherit.aes = TRUE)
</code></pre>
<h3 id="plotting">Plotting</h3>
<p>Put all your graph component together using <code>+</code> operator, and assign it to a variable. Here is an example.</p>
<pre><code>p&lt;-ggplot(testdf, aes(SentenceNumber, value, col=variable))+
  labs(title="Negative emotions through the Sentimental Narrative", x="sentence number", y="Intensity of Emotion", color="Associated Emotions", pch="Associated Emotions")+ 
  scale_color_brewer(palette = "Set1")+
  geom_smooth(alpha=0.2, mapping = NULL, data = testdf, stat = "smooth",
              position = "identity", method = "auto", formula = y ~ x,
              method.args=list(degree=2, family="symmetric"),
              se = TRUE, na.rm = FALSE, show.legend = NA, inherit.aes = TRUE)
</code></pre>
<h3 id="plotly">Plotly</h3>
<p>To convert your GGPlot (which is not interactive) to Plotly (interactive), we can use ggplotly by executing this command<br>
<code>p &lt;- plotly_build(p)</code></p>
<p>Then run the script, and call the variable <code>p</code> (in this case) by typing it on the console, and the graph should appear in the Viewer tab.</p>
<h2 id="publishing">Publishing</h2>
<p>To publish the graph to our blog, we need a help from RPubs because the interactivity provided from plotly need to be supported from some backend services.</p>
<h3 id="publishing-to-rpubs">Publishing to RPubs</h3>
<p>Press the <code>Publish</code> button on the top left corner of the viewer tab, and choose RPubs, press <code>Publish</code> and they will redirect you to the RPubs website. Register/Sign in to your account, set any description and publish.</p>
<h3 id="embedding-rpubs-to-blog">Embedding RPubs to blog</h3>
<p>Embedding it is quite straightforward<br>
<code>&lt;iframe src="https://rpubs.com/YOUR_RPUBS_PAGE" width="100%" height="800" scrolling="no"&gt;&lt;/iframe&gt;</code></p>
<p>Done!</p>

