import { IRequest, RequestOptions } from "@httpack/httpack";
import { URL } from "url";

export class Request implements IRequest {
	private method: string | undefined = undefined;
	private url: URL | undefined = undefined;
	private options: RequestOptions | undefined = undefined;

	public getMethod(): string | undefined {
		return this.method;
	}

	public withMethod(method: string): IRequest {
		this.method = method;

		return this;
	}

	public getUrl(): URL | undefined {
		return this.url;
	}

	public withUrl(url: string | URL): IRequest {
		if (typeof url === "string") {
			url = new URL(url);
		}

		this.url = url;

		return this;
	}

	public getOptions(): RequestOptions | undefined {
		return this.options;
	}

	public withOptions(options: RequestOptions | undefined): IRequest {
		this.options = options;

		return this;
	}
}
