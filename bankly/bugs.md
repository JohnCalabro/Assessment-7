router.post('/login', async function(req, res, next) {
  try {
    const { username, password } = req.body;
    // missing await keyword,
    let user = await User.authenticate(username, password);
    const token = createTokenForUser(username, user.admin);
    return res.json({ token });
  } catch (err) {
    return next(err);
  }
}); // end

This function above was originally missing the await keyword, meaning that async code
did not resolve and it went ahead and generated the token before before the user was properly authenticated. When adding await I get an error:
{
	"status": 401,
	"message": "Cannot authenticate"
}

Without await it gives me the token because it never authenticates because it never
waited to authenticate. I confirmed this by sending the POST to login without a username or password in the request and still got the token without await. Adding await fixes the issue.

----------------------

 
    if (duplicateCheck.rows[0]) {
      throw new ExpressError(
        `There already exists a user with username '${username}'`,
        409   //not sure if I'd call this a bug, but a 409 error code,
        //might be better because it means conflict, rather than a generic
        //"bad request" (400)
      );
    }

-------------------------

function authUser(req, res, next) {
  try {
    const token = req.body._token || req.query._token;  //should this be neccesary?
    // ^ would it be better to check one spot rather than multiple? Could this lead
    // to security issues?
    if (token) {
      let payload = jwt.decode(token);
      req.curr_username = payload.username;
      req.curr_admin = payload.admin;
    }
    return next();
  } catch (err) {
    err.status = 401;
    return next(err);
  }
} // end

-----------------------

/** GET /
 *
 * Get list of users. Only logged-in users should be able to use this.
 *
 * It should return only *basic* info:
 *    {users: [{username, first_name, last_name}, ...]}
 *
 */

router.get('/', authUser, requireLogin, async function(req, res, next) {
  try {
    let users = await User.getAll();
    let correctData = users.map(u => {
      const {username, first_name, last_name} = u;
      return { username, first_name, last_name };
    })
    
    return res.json({ users : correctData });
  } catch (err) {
    return next(err);
  }
});

^ * This should return only *basic* info: only username, first_name, last_name
What this returned initially was username, first_name, last_name, phone and email.
Phone and email are not included as basic information. I base this on the rules 
written in the docstring. With the modification to the code, we return the correct
information, we refactored the code to only return json with the three pieces of 
information the docstring called for. 


