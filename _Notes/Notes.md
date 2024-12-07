## Initial research
What is the project about?
- visualisation for analysis of carbon emissions

What are some key essentials needed to get it off the ground?
- charting library for data visualisation
- a general purpose way to make requests to an api
- frontend framework to get an app running quickly
- data parsed into a graph
- instructions
- matching designs

Optional considerations
- handling of different data series
- error handling for api failure
- make project accessible online via deployment
- basic navigation with sample pages
- visual flair such as animations without compromising on design

### Design Analysis
Questions to answer:
- How is the layout structured?
- What requirements does the design have?

A brief analysis of the figma project revealed the following:
- a 2-axis bar chart with 2 graphs laid on top of each other
- specific design and set color scheme
- color scheme and fonts seemed to be derived from a design system (active nav element is the same as bar colors)
- basic navigation with logo on the left and a user-profile on the right
- copyrighted font called `TT Hoves` is used
- app icon logo

### How to create the charts
One of the most important facets of this work is which charting library should be chosen.
- looked upmost popular libraries for reactjs
  https://blog.logrocket.com/top-9-react-chart-libraries
- considered `react-chartjs-2` at first due to its seemingly quick learning curve, however it was skipped. There were broken links in the readme signalling an old unmaintained project, and this was confirmed via the [github repo](https://github.com/reactchartjs/react-chartjs-2) which showed the last active commit having been done a year ago. maintenance and sustenance of a library is important due to the technical debt burden incurred when migrating away in a later lifecycle of a project.
- D3 is an extremely popular charting library and has been for years, so choosing `Recharts` which itself is based on D3 was therefore an easy choice. The interoperability with D3 is a major benefit, and active maintenance was confirmed by checking the last commit which had been made within the last week.

## Building the project
### Creating the project boilerplate
- use latest node LTS release (v20.9.0) via `.nvmrc`
- generated new project with `npx create-next-app@latest [APP]`
- chose an alternative free font similar to `TT Hoves` called `Poppins`
- extracted logo svg from figma
- created a favicon based on the color scheme from navigation

### Creating the Chart component
- created a sample chart using static data, using chatGPT with a reference screenshot of the chart (see file `_Notes/Generated Chart via ChatGPT.jpeg`)
- verified sample code for consistency and potential faults
- read up on [Recharts API](https://recharts.org/en-US/api) as a reference guide
- adjusted colors and design based on figma project for design accuracy
- challenges:
	- rendering color for text differs between chart components (not everything is considered a `label`)
	- the `Legend` component has various defaults which needed to be customised using more complex parameters (custom `renderLegendText` method  on `formatter` prop for customising color)
	- there are slight discrepancies on the styling of the legend (text not correctly center aligned, small margin between legend and chart, no rounded corners on square icon). This could be further customised with a custom prop `content={renderLegend}` similar to the `formatter` prop, or by further exploring the recharts api.
- left surrounding style out for now (headings and three dots on the right)

### Fetching the data
- use generic fetch available on the browser
- we are not passing data directly to the app in order to respect the boundary between api and user interface. this mitigates future changes to the api allows for structured flexibility

### Production Deploy
A version of this project is available via the following URL
https://emissions-visualisat-git-72bb72-jorge-antunes-projects-fee3859b.vercel.app/analyse

### Cut corners
- used chatGPT to accelerate coming up with an initial styled chart. styling can be a bit of a rabbit-hole, and I didn't want to spend too much time reading the rechart docs
- didn't use css-variables or "mini" design system. for a simple 1-page this can be ok, but a more elaborate design system should be created for efficient re-use of styles
- Chart component was not extracted into separate component and currently is too opinionated on the styles it contains. It is however isolated from other functionality and can be moved out to be shared without a lot of effort
- omitted the small three-dot icon. the figma-design didn't use an svg, so I skipped this
