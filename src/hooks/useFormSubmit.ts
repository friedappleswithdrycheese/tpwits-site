"use client";
import { useState, useCallback, useRef } from "react";

interface FormState {
  isLoading: boolean;
  isSuccess: boolean;
  error: string | null;
  fieldErrors: Record<string, string>;
}

interface UseFormSubmitOptions {
  url: string;
  onSuccess?: () => void;
}

export function useFormSubmit({ url, onSuccess }: UseFormSubmitOptions) {
  const [state, setState] = useState<FormState>({
    isLoading: false,
    isSuccess: false,
    error: null,
    fieldErrors: {},
  });
  const abortRef = useRef<AbortController | null>(null);

  const submit = useCallback(
    async (data: Record<string, string>) => {
      // Cancel any in-flight request
      abortRef.current?.abort();
      abortRef.current = new AbortController();

      setState({ isLoading: true, isSuccess: false, error: null, fieldErrors: {} });

      try {
        const res = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
          signal: abortRef.current.signal,
        });

        const json = await res.json();

        if (!res.ok) {
          setState({
            isLoading: false,
            isSuccess: false,
            error: json.error || "Something went wrong. Please try again.",
            fieldErrors: json.fields || {},
          });
          return;
        }

        setState({ isLoading: false, isSuccess: true, error: null, fieldErrors: {} });
        onSuccess?.();
      } catch (err: unknown) {
        if (err instanceof Error && err.name === "AbortError") return;
        setState({
          isLoading: false,
          isSuccess: false,
          error: navigator.onLine
            ? "Something went wrong. Please try again."
            : "You appear to be offline. Please check your connection.",
          fieldErrors: {},
        });
      }
    },
    [url, onSuccess]
  );

  const reset = useCallback(() => {
    setState({ isLoading: false, isSuccess: false, error: null, fieldErrors: {} });
  }, []);

  return { ...state, submit, reset };
}
