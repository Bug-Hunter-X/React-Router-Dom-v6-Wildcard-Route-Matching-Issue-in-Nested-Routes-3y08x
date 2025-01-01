To solve the wildcard route matching problem in nested routes, carefully order your routes. Always place more specific routes before more general ones.  Here's how to modify the routes to correct the behavior:

```jsx
// Correct Route Order
<Route path="/*" element={<NotFound />} />
<Route path="/users/:userId" element={<User />} />
```

Placing the wildcard route first ensures it will only match URLs that do not match any more specific route. 

For the nested route with `useParams()` and a wildcard, restructure your routes to avoid having a dynamic segment immediately before the wildcard.  Use a separate parameter for the nested path if needed. Alternatively, you can try using regular expressions for your routes. For example, you might change 

```jsx
<Route path="/app/:appId/*" element={<AppContent />} />
```

to something like:

```jsx
<Route path="/app/:appId/" element={<AppContent />} />
<Route path="/app/:appId/:rest*" element={<AppContent />} />
```

This approach uses a wildcard parameter to catch the rest of the path which can be processed accordingly.  Remember to adjust your component to handle this new route structure.  The key is to plan your routing strategy meticulously and ensure the order of routes and handling of parameters are perfectly aligned to your application's structure.