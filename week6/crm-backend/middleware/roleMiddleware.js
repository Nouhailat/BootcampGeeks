export const restrictTo = (...roles) => {
    return (req, res, next) => {
      if (!roles.includes(req.user.role)) {
        return res.status(403).json({ message: 'Accès interdit : rôle insuffisant' });
      }
      next();
    };
  };
  export const checkRole = (requiredRole) => {
    return (req, res, next) => {
      if (req.user && req.user.role === requiredRole) {
        return next(); 
      } else {
        return res.status(403).json({ message: "Access forbidden: insufficient permissions" });
      }
    };
  };
  