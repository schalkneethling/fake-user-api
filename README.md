# Fictional Folks

[![Netlify Status](https://api.netlify.com/api/v1/badges/1683089d-e870-491c-8121-5b6c2b5d687f/deploy-status)](https://app.netlify.com/sites/fictionalfolks/deploys)

Like the name says 🤗 Provides a fake user data API as a serverless function running on Netlify.

## Usage

### Get random users

Use the following URL to get two random users:

```
https://fictionalfolks.netlify.app/.netlify/functions/users?count=2
```

The response object will be as below for each user:

```
{
    "firstName": "Selene",
    "lastName": "Farrow",
    "avatarURL": "selene.svg",
    "role": "Flow Architect",
    "email": "selene@nimbus.tech",
    "telephone": "+1 (555) 123-4567",
    "blueSkyURL": "https://bsky.app/profile/alex.johnson",
    "mastodonURL": "https://mastodon.social/@alexjohnson",
    "linkedInURL": "https://linkedin.com/in/alexjohnson"
}
```

### Get all users

Use the following URL to get all users:

```
https://fictionalfolks.netlify.app/.netlify/functions/users
```

The response object will be an array of user objects as shown above.

## License

This project and service is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Big Thank You

A big thank you goes out to the folks at Craftworks who produces the Free Userpicks Pack used for the avatars. You can [find the pack on their website](https://userpics.craftwork.design/).
