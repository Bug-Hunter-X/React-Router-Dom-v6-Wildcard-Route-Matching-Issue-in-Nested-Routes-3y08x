In React Router Dom v6, if you are using nested routes and have a route with a wildcard (*) that comes after a route with a specific path, the wildcard route will always match, even if the specific path also matches. This is because the wildcard route is more general and will always be preferred.

For example, consider the following routes:

```jsx
<Route path="/users/:userId" element={<User />} />
<Route path="/*" element={<NotFound />} />
```

If the URL is `/users/123`, the `NotFound` component will be rendered instead of the `User` component. This is because the wildcard route `/*` is a more general match than `/users/:userId`.

Another scenario involves using `useParams` hook in a nested route with dynamic segments along with a wildcard path. If there's a dynamic segment immediately before the wildcard path, `useParams` might not retrieve the expected data because the wildcard effectively consumes the remaining part of the URL.

Consider this example:

```jsx
<Route path="/app/:appId/*" element={<AppContent />} />
```

In `AppContent`, `useParams()` might not correctly extract `appId` if the URL is `/app/123/some/nested/path`. The wildcard absorbs everything after `123`, making `useParams()` return an empty or unexpected object.

This can lead to unexpected behavior and bugs, especially when debugging.