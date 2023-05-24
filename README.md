## Ques 1: What is the purpose of creating a model with an interface and schema in MongoDB?What is TypeScript, and how is it different from JavaScript?

In MongoDB, creating a model with an interface and schema serves several purposes:

We can specify how our data is organized and how various things relate to one another by building a model with an interface and a schema. We can specify the fields, their types, and any further restrictions or validations via a schema. This helps ensure data consistency and integrity within our application. It improves code readability and makes it simpler for developers to understand the restrictions and data structure.

### How does it help in defining the structure of a collection?

By defining the structure of a collection through a model with an interface and schema in MongoDB, provide a blueprint for the documents that will be stored within that collection. The schema specifies the names and data types of the fields that are allowed in the collection, it allows us to define validation rules for each field. We can also set default values for fields, if no value is entered when creating the document, default values are automatically supplied to the fields. We can define indexes on specific fields or groups of fields in the collection to make sure it is optimized for efficient querying.



## Explain the concept of field filtering in MongoDB. How can you specify which fields to include or exclude in the returned documents?

Field filtering in Mongo DB refers to the ability to specify which fields should be included or excluded in the returned documents when executing queries. Instead of retrieving the complete document, we can get the specific fields that we need.

Here's an example If we want to include a field in the projection
```javascript
db.collection.find({}, { field1: 1, field2: 1 })
```

Here's an example If we want to include a field in the projection

```javascript
db.collection.find({}, { field3: 0, field4: 0 })
```

## What are instance methods in MongoDB models? Provide an example of a custom instance method and explain its purpose?

Instead of performing on the entire Model, instance methods take action on a particular instance of the Model. They can enable quick access to customized functionality and perform operations or computations based on the data of the document.

``` javascript
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
});

// Custom instance method
userSchema.methods.getFullName = function() {
  return this.firstName + ' ' + this.lastName;
};

const User = mongoose.model('User', userSchema);

// Example usage
const user = new User({
  firstName: 'John',
  lastName: 'Doe',
});

console.log(user.getFullName()); //-> John Doe
```

In this example, we define a userSchema using the Mongoose schema constructor, specifying the fields firstName and lastName for the User model.
The getFullName method is then added to the userSchema.methods object. This allows each User instance to have access to this method, which concatenates the firstName and lastName fields to retrieve the full name of the user.
When creating a new User instance, we can call the getFullName method on that instance to retrieve and display the full name.

## How do you use comparison operators like "$ne," "$gt," "$lt," "$gte," and "$lte" in MongoDB queries? Provide examples to illustrate their usage.

- $ne (not equal to): This operator matches values that are not equal to the specified value. Example: 

```javascript
db.users.find({ age: { $ne: 18 } });
```
- $gt (greater than): This operator matches values that are greater than the specified value.Example:

```javascript
db.users.find({ age: { $gt: 30 } });
```
- $lt (less than): This operator matches values that are less than the specified value. Example: 

```javascript
db.users.find({ age: { $lt: 40 } });
```
- $gte (greater than or equal to): This operator matches values that are greater than or equal to the specified value. Example: 

```javascript
db.users.find({ age: { $gte: 18 } });
```
- $lte (less than or equal to): This operator matches values that are less than or equal to the specified value Example: 

```javascript
db.users.find({ age: { $lte: 50 } });
```
## What are MongoDB’s “$in” and “$nin” operators? How can you use them to match values against an array of values or exclude values from a given array?

- $in : The $in operator matches documents when the value of a field matches any value in the given array. Example:
```javascript
db.users.find({ age: { $in: [25, 30, 35] } });
```

This query will find all documents in the users collection where the age field matches any of the values in the array [25, 30, 35].


- $nin: The $nin operator matches documents when a field's value is not equal with any other value in the given array. Example:
```javascript
db.users.find({ age: { $nin: [25, 30, 35] } });
```

This query will find all documents in the users collection where the age field does not match any of the values in the array [25, 30, 35]