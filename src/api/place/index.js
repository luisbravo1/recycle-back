import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { token } from '../../services/passport'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Place, { schema } from './model'

const router = new Router()
const { name, type, startTime, endTime, address, location } = schema.tree

/**
 * @api {post} /places Create place
 * @apiName CreatePlace
 * @apiGroup Place
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiParam name Place's name.
 * @apiParam type Place's type.
 * @apiParam startTime Place's startTime.
 * @apiParam endTime Place's endTime.
 * @apiParam address Place's address.
 * @apiParam location Place's location.
 * @apiSuccess {Object} place Place's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Place not found.
 * @apiError 401 admin access only.
 */
router.post('/',
  token({ required: true, roles: ['admin'] }),
  body({ name, type, startTime, endTime, address, location }),
  create)

/**
 * @api {get} /places Retrieve places
 * @apiName RetrievePlaces
 * @apiGroup Place
 * @apiUse listParams
 * @apiSuccess {Object[]} places List of places.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /places/:id Retrieve place
 * @apiName RetrievePlace
 * @apiGroup Place
 * @apiSuccess {Object} place Place's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Place not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /places/:id Update place
 * @apiName UpdatePlace
 * @apiGroup Place
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiParam name Place's name.
 * @apiParam type Place's type.
 * @apiParam startTime Place's startTime.
 * @apiParam endTime Place's endTime.
 * @apiParam address Place's address.
 * @apiParam location Place's location.
 * @apiSuccess {Object} place Place's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Place not found.
 * @apiError 401 admin access only.
 */
router.put('/:id',
  token({ required: true, roles: ['admin'] }),
  body({ name, type, startTime, endTime, address, location }),
  update)

/**
 * @api {delete} /places/:id Delete place
 * @apiName DeletePlace
 * @apiGroup Place
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Place not found.
 * @apiError 401 admin access only.
 */
router.delete('/:id',
  token({ required: true, roles: ['admin'] }),
  destroy)

export default router
