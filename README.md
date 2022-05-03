# BlueSky-Analytics

This is a GraphQL API for the required task. The API supports all the required features in addition to loads of new features.
An admin UI is built for easier access but the API can also be queried from Graphql Playground.\
It is fully secured so you will need permission to access the API.

### [Access the API]()

### How to access the API Explorer?

![Admin UI](https://res.cloudinary.com/dnqlsovnr/image/upload/v1651570815/BlueSky/Keystone_Admin_UI_soyeoh.png "Admin UI")
- Go to the URL above
- Click on the three dots
- Select the API Explorer Option

You will be directed to the API Explorer.
![API Explorer](https://res.cloudinary.com/dnqlsovnr/image/upload/v1651570815/BlueSky/GraphQL_Playground_q0xhwg.png "API Explorer")

<br/>
<br/>
Out of the box API supports **query** , **mutation** , **fragment** and **subscription**. For this assignment we are concerned with query only.
You can query the available schemas using Graphql syntax. There are loads of query parameters and options available to you. You can nest as much as you want.


### Here are some example queries.

- _Query all countries_

![All Countries](https://res.cloudinary.com/dnqlsovnr/image/upload/v1651571613/BlueSky/All_Countries_query_xptlfv.png "All Countries")
<br/>
<br/>

You can easily sort the results in any order you want
![All Countries Sorted](https://res.cloudinary.com/dnqlsovnr/image/upload/v1651571613/BlueSky/All_Countries_query_sorted_e3zmee.png "All Countries Sorted")
<br/>
<br/>

- _Get the Data for a Country in years between 2000 and 2010(inclusion)_
![Data between years](https://res.cloudinary.com/dnqlsovnr/image/upload/v1651571830/BlueSky/Query_between_start_and_end_years_s7kejm.png "Data between years")
<br/>
<br/>

- _Get the data for a Country in years between 2000 and 2010(inclusion) with categories CO2 and GHGS_CO2_
- ![Cetegory Contraints](https://res.cloudinary.com/dnqlsovnr/image/upload/v1651572310/BlueSky/Query_between_start_and_end_years_with_category_uhul85.png "Category Constraints")
<br/>
<br/>

You can place constraits on any factor, country_name, emission, category and year.

<br/>
<br/>

### Full Schema and Documentation can be accessed from the sidebar in the API Explorer. 
It contains full documentation for all the types, queries, mutations, fragments, schema and everything.

![Documentation](https://res.cloudinary.com/dnqlsovnr/image/upload/v1651572558/BlueSky/Documentation_byczir.png "Documentation")
<br/>
<br/>
 
![Schema](https://res.cloudinary.com/dnqlsovnr/image/upload/v1651572559/BlueSky/Schema_pn5rsc.png "Schema")
<br/>
<br/>
