import { NextRouter } from 'next/router'

/**
 * Creates a next router which can be used as a value in the
 * RouterContext.Provider. It can modify all definied values when passing them
 * to it.
 * @param {NextRouter} router an object to modify the router values.
 * @return {NextRouter}
 */
export const createMockRouter = (router: Partial<NextRouter>): NextRouter => {
  return {
    basePath: '',
    pathname: '/',
    route: '/',
    query: {},
    asPath: '/',
    back: jest.fn(),
    beforePopState: jest.fn(),
    prefetch: jest.fn(),
    push: jest.fn(),
    reload: jest.fn(),
    replace: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn(),
    },
    isFallback: false,
    isLocaleDomain: false,
    isReady: true,
    defaultLocale: 'en',
    domainLocales: [],
    isPreview: false,
    locale: 'en',
    ...router,
  }
}
