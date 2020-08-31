--- AirTable ---

##Installation
To run this react application in your terminal enter:

npm install;
npm start;

##Part 1:
The tech stack I chose to use includes HTML, CSS, JavaScript, React and Scss (Sass).  I decided to use a preprocessor (Sass) to handle CSS because the preprocessor will make the css easier to maintain as well as making the components easier to share with other applications or web pages.

If I had more time I would fix a bug I overlooked, which was to left align the job postings if there weren't enough to fill out a row.  I should have asked the designer for the margin between job listings instead of making assumptions about the width of the job listings and using space-between to calculate the margins.  I woud also add the use of styled components so that a design system could be used and shared with another React application.

Another feature I would like to add would be to implement aria live regions so that a user who may have trouble viewing the page to be alerted should the content of the job listings changes when a filter is used.

To better improve the user experience I would add the use of pagination as well as allow the user to select more than one location or department during job searches.  If there are many job listings, I think the view for job listings could be improved.

##Part #2:
To start off the project I would need to ask some questions about the project:
Does the stakeholder have all of the content/assetts ready?
Is there a design system already in place? If not, is a comprehensive design system needed to be developed?
How does the menu interact with the user?  How does it appear onto the view?
How is the data for the job listings being served? If an API is involved, what is the schema?
Is there a certain tech stack that is part of the requirements?

If there isn't a design system already in place, the development will be a bit more involved.  I would start by creating a design system based on the provided redlined files taking into account the different break points.  Based on the mockups provided, I don't think it would take anymore than 1-2 days to develop a design system is comprehensive enough to be resused.  I would add another day or two if the design system would require documentation through the use of Storybook or similar application.

Once, the design system is built, it will be a matter of laying out the page, building the menu component, and connecting the job search functionality.  In this particular instance, I would add Redux, and pagination to the job search.  In order to make pagination easier to implement, I would talk to the devlopers of the api to include properties that link to the next and previous results.

I would like to add a day or two just to work on useablility and accessibility.  Making sure the page was developed in a way that made it easy for someone who only used their keyboard to access the page as well as those who use a screen reader.

From the files provided I would say that this project would take me between 7-10 days.  This would include:
    Development of a design system (for this page).
    Laying out the contents of the page.
    Development of the navigation menu.
    Integration of the job search functionality.
    Testing for usability & accessability.
    Unit testing for React.