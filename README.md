# URL Shortener

This project is a simple API, development using Typescript to generate short URL using the extended URL default. Using MongoDB to storage short URL.

## API Reference

#### Create new shorted URL

```http
  POST /url/shorten
```

| Parameter   | Type     | Description                             |
| :---------- | :------- | :-------------------------------------- |
| `originURL` | `string` | **Required**. Your URL in body request. |

#### Get URL

```http
  GET /url/${:hash}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `hash`    | `string` | **Required**. Shortened URL Hash. |

#### Get all URL's

```http
  GET /url/
```

#### Delete shorted URL

```http
  DELETE /url/${:hash}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `hash`    | `string` | **Required**. Shortened URL Hash. |
