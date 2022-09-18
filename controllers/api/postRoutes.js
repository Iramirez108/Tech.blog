const router = require('express').router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth')


router.post('/', async (req, res) => {
    try {
      const newProject = await Project.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newProject);
    } catch (err) {
      res.status(400).json(err);
    }
});
  

  router.put('/:id', withAuth, async (req, res) => {
    try {
      const updateData = await Post.update(
        {
        ...req.body,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      if (!updateData) {
        res.status(404).json({ message: 'No post found with this id!' });
        return;
      }
      res.status(200).json(updateData);
    } catch (err) {
      res.status(400).json(err.message);
    }
});

router.delete('/:id', async (req, res) => {
    try {
      const projectData = await Project.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!projectData) {
        res.status(404).json({ message: 'No project found with this id!' });
        return;
      }
  
      res.status(200).json(projectData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;