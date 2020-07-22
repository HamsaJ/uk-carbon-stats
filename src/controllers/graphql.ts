import { Controller } from "./controller";
import { HttpServer } from "../server/config";
import { Request, Response } from "express";
import { graphQLService } from "../services/graphqlservice";

export class GraphQLController implements Controller {
    /**
     * 
     * @param httpServer Server interface
     */
    public initialize(httpServer: HttpServer): void {
        httpServer.get('/graphql', this.graphQL.bind(this));
        // httpServer.put('/api/account/:id', this.update.bind(this));
    }
    /**
     * 
     * @param req http request to get a user by id
     * @param res http response to return a user by id
     */
    private async graphQL(req: Request, res: Response): Promise<Response> {

        return await graphQLService.main()
            .then( (response:Response) => {
                return res.status(200).json({
                    success : true,
                    response
                })
            })
            .catch( (err: any) => {
                console.log(JSON.stringify(err))
                return res.status(500).json({
                    success : false,
                    error : JSON.stringify(err)
                })               
            })
    } 
}