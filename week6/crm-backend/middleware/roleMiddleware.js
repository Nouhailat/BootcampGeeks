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
      // Supposons que le rôle de l'utilisateur est stocké dans req.user.role
      if (req.user && req.user.role === requiredRole) {
        return next(); // Si le rôle correspond, on passe à la prochaine étape
      } else {
        return res.status(403).json({ message: "Access forbidden: insufficient permissions" });
      }
    };
  };
  