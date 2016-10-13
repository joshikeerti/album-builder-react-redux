#  Photo Album Builder
* Uses Flickr API to search for photos 
* Allows the user create a photo album.
* The user can search for photos by location or tags and manually add them to the album.

Flickr API: https://www.flickr.com/services/api


##### Runnning the application
* This requires node and npm to be installed on the machine.

`cd photo-album-builder`

`npm install` to install the dependencies

`npm start` to start the local server

* The application can then be accessed at http://localhost:3000/

##### Version of node and npm used
* node : v6.3.1
* npm : 3.10.3

##### Browers tested on
* Chrome  52.0
* Safari 9.1.1
* Firefox 47.0.1



* The app is built using react and redux
* Redux is used as the state management container
* Javascript style guide used - http://standardjs.com

#### TODOs 

###### Functionality
* Currently to keep things simple, the app only supports a single album creation and all photos are added to that album, ideally it should be able to create multiple albums and pick an album when adding the photo
* In its current state photos can be removed from the album from the main page, but not from the album.
  removing photo from the album had some bugs, so i disabled it for now.
* Create album is very basic and only takes a name, should allow description, adding location, tags to an album
* Allow album management - delete album, edit album name etc
* Allow sorting of photos by date, relevance etc.
* Add pagination / load more of ability to scroll infinitely.


###### Code
* Bug - Added to album state not retained on route changes.
* Add proptypes to props
* Add tests - unit and end to end
* Refactor to eliminate some duplicate code and combine into a single component.
* Refactor containers to move some presentational elements to components.

