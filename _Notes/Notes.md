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

