import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse, HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';

describe('HttpService', () => {
  let service: HttpService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers: [HttpService]
    });
    service = TestBed.inject(HttpService);

    // Inject the http service and test controller for each test
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });

  it('can test HttpClient.get', () => {
    const testData: any = {
      "login": "Rohit3230",
      "id": 9301957,
      "node_id": "MDQ6VXNlcjkzMDE5NTc=",
      "avatar_url": "https://avatars3.githubusercontent.com/u/9301957?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/Rohit3230",
      "html_url": "https://github.com/Rohit3230",
      "followers_url": "https://api.github.com/users/Rohit3230/followers",
      "following_url": "https://api.github.com/users/Rohit3230/following{/other_user}",
      "gists_url": "https://api.github.com/users/Rohit3230/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/Rohit3230/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/Rohit3230/subscriptions",
      "organizations_url": "https://api.github.com/users/Rohit3230/orgs",
      "repos_url": "https://api.github.com/users/Rohit3230/repos",
      "events_url": "https://api.github.com/users/Rohit3230/events{/privacy}",
      "received_events_url": "https://api.github.com/users/Rohit3230/received_events",
      "type": "User",
      "site_admin": false,
      "name": "Rohit Kumar",
      "company": "YoGems India Pvt Ltd",
      "blog": "https://about.me/rohit3230",
      "location": "Noida (Delhi NCR) India",
      "email": null,
      "hireable": true,
      "bio": "MEAN / MERN Stack Developer",
      "twitter_username": "rohit3230",
      "public_repos": 19,
      "public_gists": 0,
      "followers": 2,
      "following": 4,
      "created_at": "2014-10-19T04:13:02Z",
      "updated_at": "2020-12-15T03:27:52Z"
    };
    const testUrl='https://api.github.com/users/rohit3230';
    // Make an HTTP GET request
    httpClient.get<any>(testUrl)
      .subscribe(data =>
        // When observable resolves, result should match test data
        // console.log('data***'+data);
        expect(data).toEqual(testData)
      );
  
    // The following `expectOne()` will match the request's URL.
    // If no requests or multiple requests matched that URL
    // `expectOne()` would throw.
    const req = httpTestingController.expectOne(testUrl);
  
    // Assert that the request is a GET.
    expect(req.request.method).toEqual('GET');
  
    // Respond with mock data, causing Observable to resolve.
    // Subscribe callback asserts that correct data was returned.
    req.flush(testData);
  
    // Finally, assert that there are no outstanding requests.
    httpTestingController.verify();
  });


});
