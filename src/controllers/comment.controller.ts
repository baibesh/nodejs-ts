import { Body, Get, Path, Post, Route, Tags } from "tsoa";
import { Comment } from "../models";
import { createComment, getComment, getComments, ICommentPayload } from "../repositories/comment.repository";

@Route("comments")
@Tags("Комментарии")
export default class CommentController {
    @Get("/")
    public async getComments(): Promise<Array<Comment>> {
        return getComments();
    }

    @Get("/:id")
    public async getComment(@Path() id: string): Promise<Comment | null> {
        return getComment(Number(id));
    }

    @Post("/")
    public async createComment(@Body() body: ICommentPayload): Promise<Comment> {
        return createComment(body);
    }
}