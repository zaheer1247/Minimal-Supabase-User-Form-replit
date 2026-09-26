import { useState, type FormEvent } from 'react';
import { ArrowUpRight, Check, CircleAlert, Fingerprint, LoaderCircle } from 'lucide-react';
import { supabase } from '@/lib/supabase';

type SubmitState =
  | { kind: 'idle' }
  | { kind: 'success' }
  | { kind: 'error'; details: string };

function getErrorDetails(error: unknown): string {
  if (error instanceof Error) return error.message;
  if (typeof error === 'string') return error;
  try {
    return JSON.stringify(error);
  } catch {
    return 'Unknown Supabase error';
  }
}

function Home() {
  const [username, setUsername] = useState('');
  const [submitState, setSubmitState] = useState<SubmitState>({ kind: 'idle' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmedUsername = username.trim();

    if (!trimmedUsername) {
      setSubmitState({
        kind: 'error',
        details: 'Enter a username before continuing.',
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitState({ kind: 'idle' });

    try {
      if (!supabase) {
        throw new Error(
          'Supabase is not configured. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.',
        );
      }

      const { error } = await supabase
        .from('users')
        .insert({ username: trimmedUsername });

      if (error) throw error;

      setUsername('');
      setSubmitState({ kind: 'success' });
    } catch (error) {
      console.error('Failed to create user:', error);
      setSubmitState({ kind: 'error', details: getErrorDetails(error) });
    } finally {
      setIsSubmitting(false);
    }
  }

  const showError = submitState.kind === 'error';
  const showSuccess = submitState.kind === 'success';

  return (
    <main className="app-shell relative min-h-[100dvh] overflow-hidden px-5 py-6 text-foreground sm:px-8 sm:py-8">
      <div className="grid-texture pointer-events-none absolute inset-x-0 top-0 h-[46rem] opacity-70" aria-hidden="true" />
      <div className="relative mx-auto flex min-h-[calc(100dvh-3rem)] w-full max-w-[1120px] flex-col">
        <header className="page-rise flex items-center justify-between">
          <div className="flex items-center gap-3" data-testid="text-brand">
            <div className="flex h-9 w-9 items-center justify-center rounded-[11px] bg-foreground text-accent shadow-[3px_3px_0_hsl(74_71%_51%_/_0.24)]">
              <Fingerprint size={19} strokeWidth={2.2} aria-hidden="true" />
            </div>
            <span className="font-display text-[17px] font-semibold tracking-[-0.03em]">
              outside / in
            </span>
          </div>
          <div className="flex items-center gap-2 font-mono-ui text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
            <span className="status-dot h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            <span data-testid="text-status">secure entry</span>
          </div>
        </header>

        <section className="flex flex-1 items-center py-14 sm:py-20">
          <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,0.86fr)_minmax(420px,0.98fr)] lg:gap-24">
            <div className="page-rise max-w-[500px]">
              <p className="mb-5 flex items-center gap-3 font-mono-ui text-[11px] uppercase tracking-[0.19em] text-muted-foreground">
                <span className="h-px w-8 bg-accent" aria-hidden="true" />
                First, make it yours
              </p>
              <h1 className="font-display text-[clamp(3.35rem,7.2vw,6.7rem)] font-semibold leading-[0.86] tracking-[-0.075em] text-foreground">
                A name
                <br />
                <span className="text-[hsl(var(--destructive))]">worth keeping.</span>
              </h1>
              <p className="mt-8 max-w-[380px] text-[15px] leading-7 text-muted-foreground sm:text-base">
                Choose the username that will follow you in. One small decision,
                saved exactly as you wrote it.
              </p>
              <div className="mt-12 hidden items-center gap-3 text-muted-foreground sm:flex">
                <div className="flex -space-x-2" aria-hidden="true">
                  <span className="h-7 w-7 rounded-full border-2 border-background bg-[hsl(var(--destructive))]" />
                  <span className="h-7 w-7 rounded-full border-2 border-background bg-accent" />
                  <span className="h-7 w-7 rounded-full border-2 border-background bg-[hsl(var(--chart-5))]" />
                </div>
                <span className="text-xs leading-5">
                  A quiet start for
                  <br />
                  wherever you’re going.
                </span>
              </div>
            </div>

            <div className="page-rise-delay">
              <div className="form-card relative overflow-hidden rounded-[22px] border border-card-border bg-card p-6 sm:p-9">
                <div className="absolute right-0 top-0 h-28 w-28 translate-x-8 -translate-y-8 rounded-full bg-accent/20 blur-2xl" aria-hidden="true" />
                <div className="relative">
                  <div className="mb-9 flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono-ui text-[10px] uppercase tracking-[0.17em] text-muted-foreground">
                        Your username
                      </p>
                      <h2 className="mt-2 font-display text-2xl font-semibold tracking-[-0.045em] text-card-foreground sm:text-[28px]">
                        Start with one word.
                      </h2>
                    </div>
                    <div className="rounded-full border border-border px-2.5 py-1 font-mono-ui text-[10px] text-muted-foreground">
                      01 / 01
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} noValidate>
                    <label
                      htmlFor="username"
                      className="mb-2 block text-sm font-medium text-card-foreground"
                    >
                      What should we call you?
                    </label>
                    <div className="relative">
                      <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 font-mono-ui text-sm text-muted-foreground" aria-hidden="true">
                        @
                      </span>
                      <input
                        id="username"
                        name="username"
                        type="text"
                        autoComplete="username"
                        autoCapitalize="none"
                        spellCheck={false}
                        value={username}
                        onChange={(event) => {
                          setUsername(event.target.value);
                          if (submitState.kind !== 'idle') setSubmitState({ kind: 'idle' });
                        }}
                        placeholder="your-username"
                        disabled={isSubmitting}
                        aria-invalid={showError}
                        aria-describedby="username-hint form-status"
                        className="username-input h-14 w-full rounded-[12px] border border-input bg-background pl-10 pr-4 font-mono-ui text-[15px] text-foreground outline-none placeholder:text-muted-foreground/60 focus:border-accent disabled:cursor-not-allowed disabled:opacity-65"
                        data-testid="input-username"
                      />
                    </div>
                    <p id="username-hint" className="mt-2.5 text-xs leading-5 text-muted-foreground">
                      Keep it memorable. Spaces at the edges are trimmed.
                    </p>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="submit-button mt-8 flex h-14 w-full items-center justify-between rounded-[12px] bg-primary px-5 font-medium text-primary-foreground outline-none ring-offset-2 focus-visible:ring-2 focus-visible:ring-accent disabled:cursor-wait disabled:opacity-70"
                      data-testid="button-submit"
                    >
                      <span>{isSubmitting ? 'Saving your name' : 'Save username'}</span>
                      {isSubmitting ? (
                        <LoaderCircle size={18} className="animate-spin" aria-hidden="true" />
                      ) : (
                        <ArrowUpRight size={19} strokeWidth={2} aria-hidden="true" />
                      )}
                    </button>

                    <div
                      id="form-status"
                      className="min-h-11 pt-5"
                      aria-live="polite"
                      data-testid="status-form"
                    >
                      {showSuccess ? (
                        <div className="flex items-start gap-2.5 text-sm text-[hsl(var(--chart-5))]">
                          <Check size={17} className="mt-0.5 shrink-0" strokeWidth={2.5} aria-hidden="true" />
                          <div>
                            <p className="font-medium">User created successfully</p>
                            <p className="mt-1 text-xs text-muted-foreground">Your username is ready.</p>
                          </div>
                        </div>
                      ) : showError ? (
                        <div className="flex items-start gap-2.5 text-sm text-destructive">
                          <CircleAlert size={17} className="mt-0.5 shrink-0" strokeWidth={2.2} aria-hidden="true" />
                          <div className="min-w-0">
                            <p className="font-medium">Failed to create user</p>
                            <p className="mt-1 break-words font-mono-ui text-[11px] leading-5 text-destructive/80">
                              {submitState.details}
                            </p>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </form>
                </div>
              </div>
              <p className="mt-5 px-1 text-center font-mono-ui text-[10px] uppercase tracking-[0.13em] text-muted-foreground/75">
                Stored in public.users · no account required
              </p>
            </div>
          </div>
        </section>

        <footer className="page-rise-delay flex items-center justify-between border-t border-border/80 pt-5 font-mono-ui text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
          <span data-testid="text-footer-left">A small beginning</span>
          <span data-testid="text-footer-right">your space, your pace</span>
        </footer>
      </div>
    </main>
  );
}

function App() {
  return <Home />;
}

export default App;
