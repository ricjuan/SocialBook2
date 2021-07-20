import { Meteor } from 'meteor/meteor';
import '../lib/collection.js';
import '../lib/userAcct.js';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.publish('profData', function(){
  return profilesdb.find({}, {
   // fields: {pFirst: 1, pLast: 0, pAge: 1}

  });
});
Meteor.publish('proDat', function(data){
  return profilesdb.find({_id:data}, {
   // fields: {pFirst: 1, pLast: 0, pAge: 1}

  });
});

Meteor.publish('noUser', function(){
  return profilesdb.find({}, {
    fields: {pPic:1, pFirst:1, pLast:1, pAge:1}

  });
});
