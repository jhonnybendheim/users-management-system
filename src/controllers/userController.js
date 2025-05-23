import { validateUser } from '../validators/userValidator.js';
import * as userService from '../services/userService.js';


export async function create(req, res) {
  const result = await validateUser(req.body);
  return res.status(result.status).json(result.error ? { error: result.error } : { message: result.message });
}

export async function getAll(req, res) {
  const result = await userService.getAllUsers();
  res.status(200).json(result);
}

export async function getById(req, res) {
  const result = await userService.getUserById(req.params.id);
  res.status(result.error ? 404 : 200).json(result);
}

export async function update(req, res) {
  const result = await userService.updateUser(req.params.id, req.body);
  res.status(result.error ? 400 : 200).json(result);
}

export async function remove(req, res) {
  const result = await userService.deleteUser(req.params.id);
  res.status(result.error ? 400 : 200).json(result);
}