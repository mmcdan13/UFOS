# UFOS

## Project Overview

Based on a Javascript file filled with UFO sighting information, I am using JavaScript to create a table of the data as well as filters that help users see the UFO sightings of their interest. This table will be displayed using HTML and will be accompanied by headings and a brief blurb about UFOs.

## Results

The result of this project is a dynamic webpage (pictured below) that welcomes users with a short article and an unfiltered table of UFO sightings that displays the date, city, state, country, shape, and duration of each sighting.

![](/static/images/UFO_webpage.png)

To filter this data to get information that may be more relevant to the user: a user simply has to type in one or more filter conditions in the designated user input box. Exhibited below is an example of a user typing in ONE filter condition - ca as the state of the sighting. 
![](/static/images/state_filter_UFO.png)

As you can see below, you can add another filter condition to further hone into the UFO sightings of interest. The user can type in "light" into the Shape filter and press enter, and now the data table will show only those sightings that took place in California AND that had the light shape. 

![](/static/images/shape_filter_UFO.png)



## Summary 

While the webpage is interactive and changes alongside the user's input there are some limitations: 
- one drawback of the webpage is that the table can not have multiple filtering criteria for one column. For example, you can not see only the sightings that took place in Fresno and El Cajon (ie you cannot filter city for both Fresno and El Cajon). 
 - For further development, I would recommend adding the capability for multiple filtering options per column. 
-Another drawback of the webpage is that the data is outdated.
  - I would also recommend that: 
   - the webpage be able to pull data from current sources
   - list when the data was last updated/refreshed
