/**
 * @file 统一的try/catch错误捕捉入口
 * @author mapleChain(popm73@163.com)
 */

module.exports = async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    // will only respond with JSON
    ctx.status = err.statusCode || err.status || 500;
    ctx.body = {
      success: false,
      message: err.message
    }
  }
}
